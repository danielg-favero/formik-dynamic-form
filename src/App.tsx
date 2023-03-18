import { Formik, FieldArray, useField, FieldArrayRenderProps, FormikValues } from 'formik'
import { useCallback, useState } from 'react'

import "./App.css"

function App() {
  const handleSubtmit = useCallback((values: FormikValues) => {
    console.log({ values })
  }, [])

  return (
    <main>
      <aside>
        <button>New Page +</button>
      </aside>
      <Formik 
        initialValues={{ 
          fields: [{ 
            input: '' 
          }]
        }}
        onSubmit={handleSubtmit}
      >
        {({ submitForm, setValues, values }) => (
          <section>
            <FieldArray name='fields' render={() => (
              <section>
                {values.fields.map((field, index) => (
                  <input 
                    key={`${field}.input.${index}`}
                    name={`${field}.input.${index}`}
                    type="text" 
                    placeholder='Type Something...'
                  />
                ))}
                <button 
                  onClick={() => setValues({ fields: [...values.fields, { input: '' }] })}
                >
                  New Field +
                </button>
              </section>
            )}/>
            <button type="submit" onClick={submitForm}>
              Submit Form
            </button>
          </section>
        )}
      </Formik>
    </main>
  )
}

export default App
