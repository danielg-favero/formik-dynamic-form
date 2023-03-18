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
```