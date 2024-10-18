import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Button, Grid } from '@mui/material';
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <Box sx={{ maxWidth: 600, width: '100%', margin: '0 auto' }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Autocomplete
              freeSolo
              options={cities.map((option) => option.name)}
              renderInput={(params) => <TextField {...params} label="City Name" />}
              inputValue={inputValue}
              onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
              sx={{ flexGrow: 1 }}
            />
          </Grid>

          <Grid item>
            <Button type="submit" variant="contained" size="large">
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

const cities = [
  { name: 'Tallinn' },
  { name: 'Loo' },
  { name: 'Bangkok' },
  { name: 'Haapsalu' },
  { name: 'Narva' },
];
