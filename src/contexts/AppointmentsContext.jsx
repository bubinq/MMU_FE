import { createContext, useState, useContext } from "react";

export const AppointmentsContext = createContext({
  scheduleInfo: { isOpened: false, doctorId: "" },
  setScheduleInfo: () => {},
});

export const AppointmentsProvider = ({ children }) => {
  const [scheduleInfo, setScheduleInfo] = useState({
    isOpened: false,
    doctorId: "",
  });

  return (
    <AppointmentsContext.Provider
      value={{
        scheduleInfo,
        setScheduleInfo,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
};

export default function useAppointments() {
  return useContext(AppointmentsContext);
}
