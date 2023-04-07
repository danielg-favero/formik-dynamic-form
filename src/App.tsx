import { FormikValues } from "formik";
import { useCallback, useState } from "react";

import "./App.css";
import { FormStepper, FormStep, FormFieldsPage } from "./components";
import { IFormValuesProps } from "./types";

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
    <main>
      <aside>
        {sidebarPages.map((page, index) => (
          <button key={index} onClick={() => handleSwitchPage(index)}>
            Página {index + 1}
          </button>
        ))}
        <button onClick={handleAddPage}>New Page +</button>
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
