import { FormikValues } from "formik";
import { useCallback, useState } from "react";

import "./tailwind.css";

import { FormStepper, FormFieldsPage, Button, IconButton } from "./components";
import { IFormValuesProps } from "./types";
import { MdAdd, MdDelete } from "react-icons/md";

function App() {
  const [sidebarPages, setSidebarPages] = useState<IFormValuesProps[]>([
    { id: 0, fields: [] },
  ]);
  const [currentStep, setCurrentStep] = useState(0);

  const handleSubtmit = useCallback((values: FormikValues) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 1000);
  }, []);

  const handleAddPage = useCallback(() => {
    const newPageId = sidebarPages.length;
    const newPage = {
      id: newPageId,
      fields: [],
    };

    setSidebarPages((prerviousSidebarPages) => {
      return [...prerviousSidebarPages, newPage];
    });
  }, [sidebarPages]);

  const handleDeletePage = useCallback(
    (index: number) => {
      setSidebarPages((prerviousSidebarPages) => {
        prerviousSidebarPages.splice(index, 1);
        console.log(prerviousSidebarPages);
        return [...prerviousSidebarPages];
      });
      setCurrentStep((previousCurrentStep) => {
        if (previousCurrentStep === 0) {
          return 0;
        } else {
          return previousCurrentStep - 1;
        }
      });
    },
    [sidebarPages]
  );

  const handleSwitchPage = useCallback((pageIndex: number) => {
    setCurrentStep(pageIndex);
  }, []);

  return (
    <main className="flex w-screen h-screen overflow-hidden bg-slate-900">
      <aside className="flex flex-col w-2/12 gap-2 px-8 py-4 shadow-2xl bg-indigo-950">
        {sidebarPages.map((page, index) => (
          <div className="flex gap-2">
            <Button
              isEnabled={index === currentStep}
              key={index}
              onClick={() => handleSwitchPage(index)}
            >
              Page {index + 1}
            </Button>
            {sidebarPages.length > 1 && (
              <IconButton onClick={() => handleDeletePage(index)}>
                <MdDelete />
              </IconButton>
            )}
          </div>
        ))}
        <Button onClick={handleAddPage}>
          New Page <MdAdd />
        </Button>
      </aside>
      <FormStepper
        currentStep={currentStep}
        initialValues={sidebarPages}
        onSubmit={handleSubtmit}
        enableReinitialize
      >
        {sidebarPages.map((page, index) => (
          <FormFieldsPage pageIndex={index} onChange={setSidebarPages} />
        ))}
      </FormStepper>
    </main>
  );
}

export default App;
