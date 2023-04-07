import { Field, FieldArray, useFormikContext } from "formik";
import React, { useCallback, useEffect } from "react";
import { FormStep } from "..";
import { IFormFieldsPage } from "./types";
import { IFormValuesProps } from "../../types";

export * from "./types";

export const FormFieldsPage: React.FC<IFormFieldsPage> = ({
  pageIndex,
  onChange,
}) => {
  const { values, submitForm } = useFormikContext<IFormValuesProps[]>();
  const fields = values[pageIndex].fields;

  const handleAddField = useCallback(
    (fn: (index: number, value: any) => void) => {
      const index = fields.length;
      fn(index, { id: index, text: "" });
    },
    [fields, values]
  );

  useEffect(() => {
    onChange(values);
  }, [values]);

  return (
    <FormStep initialValues={values} enableReinitialize>
      <FieldArray
        name={`${pageIndex}.fields`}
        render={({ insert, remove }) => (
          <section>
            {fields.map((field, index: number) => (
              <div className="field" key={field.id}>
                <Field
                  name={`${pageIndex}.fields.${index}.text`}
                  key={`${pageIndex}.fields.${index}.id`}
                  type="text"
                  placeholder="Type Something..."
                />
                <button onClick={() => remove(index)}>Delete</button>
              </div>
            ))}
            <button onClick={() => handleAddField(insert)}>New Field +</button>
          </section>
        )}
      />
      <button type="submit" onClick={submitForm}>
        Submit Form
      </button>
    </FormStep>
  );
};
