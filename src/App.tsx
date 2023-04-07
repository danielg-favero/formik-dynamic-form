import { FormikValues } from "formik";
import { useCallback, useState } from "react";

import "./tailwind.css";

import { FormStepper, FormFieldsPage, Button } from "./components";
import { IFormValuesProps } from "./types";
import { MdAdd } from "react-icons/md";

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

  const handleSwitchPage = useCallback((pageIndex: number) => {
    setCurrentStep(pageIndex);
  }, []);

  return (
    <main className="flex w-screen h-screen overflow-hidden bg-slate-900">
      <aside className="flex flex-col w-2/12 gap-2 px-8 py-4 shadow-2xl bg-indigo-950">
        {sidebarPages.map((page, index) => (
          <Button
            isEnabled={index === currentStep}
            key={index}
            onClick={() => handleSwitchPage(index)}
          >
            Page {index + 1}
          </Button>
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
