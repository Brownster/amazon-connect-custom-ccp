import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

const modules = [
  { key: 'ccp', label: 'CCP Panel' },
  { key: 'workspace', label: 'Workspace' },
  { key: 'taskList', label: 'Task List' },
];

const Admin = () => {
  const [primaryColor, setPrimaryColor] = useState('');
  const [logo, setLogo] = useState('');
  const [enabledModules, setEnabledModules] = useState(() => {
    const stored = localStorage.getItem('modules');
    return stored ? JSON.parse(stored) : { ccp: true, workspace: true, taskList: true };
  });

  useEffect(() => {
    const storedColor = localStorage.getItem('primaryColor');
    const storedLogo = localStorage.getItem('logo');
    if (storedColor) setPrimaryColor(storedColor);
    if (storedLogo) setLogo(storedLogo);
  }, []);

  const handleSave = () => {
    if (primaryColor) localStorage.setItem('primaryColor', primaryColor);
    if (logo) localStorage.setItem('logo', logo);
    localStorage.setItem('modules', JSON.stringify(enabledModules));
    window.location.reload();
  };

  const toggleModule = (key) => {
    setEnabledModules({ ...enabledModules, [key]: !enabledModules[key] });
  };

  return (
    <Box sx={{ p: 2 }}>
      <h2>Admin Settings</h2>
      <FormGroup>
        <TextField
          label="Primary Color"
          value={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Logo Path"
          value={logo}
          onChange={(e) => setLogo(e.target.value)}
          sx={{ mb: 2 }}
        />
        {modules.map((m) => (
          <FormControlLabel
            key={m.key}
            control={
              <Checkbox
                checked={enabledModules[m.key] || false}
                onChange={() => toggleModule(m.key)}
              />
            }
            label={m.label}
          />
        ))}
        <Button variant="contained" onClick={handleSave} sx={{ mt: 2 }}>
          Save
        </Button>
      </FormGroup>
    </Box>
  );
};

export default Admin;
