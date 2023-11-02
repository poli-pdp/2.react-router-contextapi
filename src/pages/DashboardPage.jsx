import { Link, Outlet } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div>
      <h1>DashboardPage</h1>
      <ul>
        <li>
          <Link to="indicadores">indicadores</Link>
        </li>
        <li>
          <Link to="metricas">metricas</Link>
        </li>
        <li>
          <Link to="graficos">graficos</Link>
        </li>
      </ul>
      <br />
      <Outlet />
    </div>
  );
};

export default DashboardPage;
