import React, { useContext } from "react";
import { navItems } from "../../utils/constants";
import AboutUs from "../../pages/AboutUs";
import StarWars from "../../pages/StarWars";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import { Route, Routes } from "react-router-dom";

// const Main = ({ currentPage }: {currentPage: string}): JSX.Element | null => {
// const Main: React.FC<{currentPage: string}> = ({currentPage}): JSX.Element | null => {
const Main: React.FC = (): JSX.Element => {
  return (
    <Routes>
      {
        [`/`, `/${navItems[0].route}`, `/${navItems[0].route}/:heroId`]
          .map(p => <Route key={p} path={p} element={<Home />} />)
      }
      {
        [`/${navItems[1].route}`, `/${navItems[1].route}/:heroId`]
        .map(p => <Route key={p} path={p} element={<AboutUs />} />)
      }
      <Route path={`/${navItems[2].route}/:heroId`} element={<StarWars />} />
      <Route path={`/${navItems[3].route}/:heroId`} element={<Contact />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  );
  // const { currentPageContext, changePageContext } = useContext(AppContext);
  // switch (currentPageContext) {
  //   case navItems[0]:
  //     return (
  //       <div
  //         onClick={() => {
  //           changePageContext(navItems[0]);
  //         }}
  //       >
  //         <Routes>
  //           <Route path={`/${navItems[0]}`} element={<Home />} />
  //         </Routes>
  //       </div>
  //     );
  //   case navItems[1]:
  //     return (
  //       <Routes>
  //         <Route path={`/${navItems[1]}`} element={<AboutUs />} />
  //       </Routes>
  //     );
  //   case navItems[2]:
  //     return (
  //       <Routes>
  //         <Route path={`/${navItems[2]}`} element={<StarWars />} />
  //       </Routes>
  //     );
  //   // case navItems[3]:
  //   //   return (
  //   //     <Routes>
  //   //       <Route path={`/${navItems[3]}`} element={<Contact />} />
  //   //     </Routes>
  //   //   );
  //   default:
  //     return (
  //       <Routes>
  //         <Route path="*" element={<Contact />} />
  //       </Routes>
  //     );
  // }
  // const {currentPageContext} = useContext(AppContext);
  // switch (currentPageContext) {
  //   // case navItems[0]:
  //   //   return <Home />;
  //   case navItems[1]:
  //     return <AboutUs />
  //   case navItems[2]:
  //     return <StarWars />
  //   case navItems[3]:
  //     return <Contact />
  //   default:
  //     return <Home />;
  //     // return null;
  // }
};

export default Main;
