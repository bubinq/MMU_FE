import { createContext, useState, useContext } from "react";

export const AppointmentsContext = createContext({
  scheduleInfo: { isOpened: false, doctorId: "" },
  setScheduleInfo: () => {},
  selectedType: "",
  setSelectedType: () => {},
});

export const AppointmentsProvider = ({ children }) => {
  const [scheduleInfo, setScheduleInfo] = useState({
    isOpened: false,
    doctorId: "",
  });
  const [selectedType, setSelectedType] = useState("UPCOMING");

  return (
    <AppointmentsContext.Provider
      value={{
        scheduleInfo,
        setScheduleInfo,
        selectedType,
        setSelectedType,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
};

export default function useAppointments() {
  return useContext(AppointmentsContext);
}
