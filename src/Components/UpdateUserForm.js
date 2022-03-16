import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { Formik, Form } from 'formik';
// import TextField from './FormComponents/FormTextInput';

import * as Yup from 'yup';
import { Box } from '@mui/system';
import { Stack } from '@mui/material';
const Schema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required Name!'),
  email: Yup.string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required'),
  designation: Yup.string()
    .min(2, 'Too Short!')
    .required('Required designation!'),
  joining_date: Yup.string().required('Required Joining Date!'),
});

export default function UpdateUserForm({ onSubmit, initialValues }) {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={Schema}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values);
          await onSubmit(values);
          setSubmitting(false);

          console.log('clicked');
        }}
      >
        {({ isSubmitting, values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Stack sx={{ m: '10px' }}>
              <TextField
                variant="outlined"
                value={values.name}
                label="Name"
                name="name"
                type="text"
                placeholder="Name"
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </Stack>

            <Stack sx={{ m: '10px' }}>
              <TextField
                variant="outlined"
                value={values.email}
                label="Email"
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </Stack>

            <Stack sx={{ m: '10px' }}>
              <TextField
                variant="outlined"
                value={values.designation}
                label="Designation"
                name="designation"
                type="text"
                placeholder="Designation"
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </Stack>
            <Stack sx={{ m: '10px' }}>
              <TextField
                variant="outlined"
                value={values.joining_date}
                label="Joining Date"
                name="joining_date"
                type="text"
                placeholder="Joining Date"
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </Stack>

            <Box sx={{ float: 'right', mt: '10px' }}>
              <Button
                fullWidth={false}
                variant="outlined"
                variant="contained"
                disabled={isSubmitting}
                color="primary"
                type="submit"
              >
                Update
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
}
