/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

export default function AutocompleteSelector({ selectionOptions, setSelection, id='selector', label='Enter a selection' }) {
  // const [selectionOptions, setSelectionOptions] = useState( [ {
  //   "datacoverage": 1,
  //   "id": "CITY:US530018",
  //   "maxdate": "2021-07-02",
  //   "mindate": "1891-01-01",
  //   "name": "Seattle, WA US"
  // } ] );
  
  // useEffect(() => {
  //   fetchData();
  //   async function fetchData() {
  //     const result = await fetch('/api/locations/cities').then(res => res.json()).then(data => {
  //     //console.log(data.cities);
  //     setSelectionOptions(data.cities);
  //     });
  //   }
  // }, []);


  const classes = useStyles();

  return (
    <Autocomplete
      onChange={(event, value) => setSelection(value)}
      id={id}
      style={{ width: 300 }}
      options={selectionOptions}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(option) => (
        <React.Fragment>
          <span> {option.name}</span>
          {option.id}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}