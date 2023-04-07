# React Dynamic Pages and Dynamic Fields on Form

## Iniciar projeto react

```bash
npm init vite@latest dynamic-form -- --template react-ts
``` 

## Estrutura do form

```html
<main>
    <aside>
        <button>New Page +</button>
    </aside>
    <form>
        <input type="text" placeholder="Type Something"/>
        <button>New Field +</button>
        <button type="submit">Submit Form</button>
    </form>
</main>
```

## Adicionar Formik

```bash
yarn add formik
```

## Usando formik

```tsx
import { Formik, FieldArray, FormikValues, Field } from 'formik'
import { useCallback } from 'react'

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
          fields: []
        }}
        onSubmit={handleSubtmit}
      >
        {({ submitForm, values }) => (
          <section>
            <FieldArray name='fields' render={({ insert }) => (
              <section>
                {values.fields.map((field, index) => (
                  <Field 
                    name={`fields.${index}`}
                    key={`fields.${index}`}
                    type="text"
                    placeholder='Type Something...'
                  />
                ))}
                <button 
                  onClick={() => {
                    insert(values.fields.length, '')
                  }}
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
```

# Adicionar o FormStepper

```tsx
import { Formik } from "formik"
import { Children, ReactElement } from "react"
import { IFormStepperProps } from "./types"

export const FormStepper: React.FC<IFormStepperProps> = ({ children, currentStep, ...props }) => {
    const childrenArray = Children.toArray(children as ReactElement)
  
    const currentChild = childrenArray[currentStep]

    return (
      <Formik
        {...props}
        onSubmit={(values, helpers) => props.onSubmit(values, helpers)}
      >
        {currentChild}
      </Formik>
    )
}
```

```tsx
import React from 'react'

import { IFormStepProps } from './types'

export * from './types'

const FormStep: React.FC<IFormStepProps> = ({ children }) => {
  return <section>{children}</section>
}

export default FormStep
```

```tsx
function App() {
  const formRef = useRef<FormikProps<FormikValues>>(null)

  const handleSubtmit = useCallback((values: FormikValues) => {
    console.log({ values })
  }, [])

  return (
    <main>
      <aside>
        <button>New Page +</button>
      </aside>
      <FormStepper 
        currentStep={0}
        initialValues={{ 
          fields: []
        }}
        onSubmit={handleSubtmit}
        innerRef={formRef}
      >
        <FormStep>
          <FieldArray name='fields' render={({ insert }) => (
            <section>
              {formRef.current?.values.fields.map((field: Array<string>, index: number) => (
                <Field 
                  name={`fields.${index}`}
                  key={`fields.${index}`}
                  type="text"
                  placeholder='Type Something...'
                />
              ))}
              <button 
                onClick={() => {
                  insert(formRef.current?.values.fields.length, '')
                }}
              >
                New Field +
              </button>
            </section>
          )}/>
          <button type="submit" onClick={formRef.current?.submitForm}>
            Submit Form
          </button>
        </FormStep>
      </FormStepper>
    </main>
  )
}
```

# Abstrair em componentes