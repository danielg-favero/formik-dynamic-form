import { FieldArray, useFormikContext } from "formik";
import React, { useCallback, useEffect } from "react";
import { Button, FormStep, IconButton, Input } from "..";
import { IFormFieldsPageProps } from "./types";
import { MdDelete, MdAdd, MdSend } from "react-icons/md";
import { IFormValuesProps } from "../../types";

export * from "./types";

export const FormFieldsPage: React.FC<IFormFieldsPageProps> = ({
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
    <FormStep>
      <main className="flex flex-col w-full gap-4 p-4">
        <FieldArray
          name={`${pageIndex}.fields`}
          render={({ insert, remove }) => (
            <>
              {fields.map((field, index: number) => (
                <div className="flex gap-2" key={field.id}>
                  <Input
                    name={`${pageIndex}.fields.${index}.text`}
                    key={`${pageIndex}.fields.${index}.id`}
                    type="text"
                    placeholder="Type something..."
                  />
                  <IconButton onClick={() => remove(index)}>
                    <MdDelete />
                  </IconButton>
                </div>
              ))}
              <Button onClick={() => handleAddField(insert)}>
                New Field <MdAdd />
              </Button>
            </>
          )}
        />
        <Button type="submit" onClick={submitForm}>
          Submit Form <MdSend />
        </Button>
      </main>
    </FormStep>
  );
};
