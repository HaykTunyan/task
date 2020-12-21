import TableData from "../components/table/table";
import NotFound from "../components/notFound/notFound";
import { StepForm } from "../components/stepForm/stepForm";

const RouterPath = [
  {
    path: "/",
    exact: true,
    component: StepForm,
  },
  {
    path: "/table",
    component: TableData,
  },
  {
    component: NotFound,
  },
];

export default RouterPath;
