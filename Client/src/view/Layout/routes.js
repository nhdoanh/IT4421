import Primary from "../Primary/getMathContainer";
import GocHocTap from "../GocHocTap/gochoctapContainer"

const routes = [
  { path: "/", exact: true, name: "primary", component: Primary },
  { path: "/tin", exact: true, name: "tin", component: GocHocTap}
];

export default routes;