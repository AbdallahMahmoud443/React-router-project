import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IProps {
  isAllow: boolean;
  RedirctPath: string;
  children: ReactNode;
  data?:unknown
}

const PrvateRoute = ({ isAllow, RedirctPath, children,data }: IProps) => {
  //* (Replace prop) => Replace will replace the current entry in history stack (redirect you to last page you visit)
  //* (state) => use to send data to navigate component (belong to react-rounter-dom)
  /**
   * data=> for example send data of user after login to another page used in this case (state and uselocation hook) => (belong to react-rounter-dom)
   */
  if (!isAllow) return <Navigate to={RedirctPath} replace state={data}/>;
  return children;
};

export default PrvateRoute;
