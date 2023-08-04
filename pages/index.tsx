import React, { useState } from "react";

import useTournamentStatistics from "./../hooks/useFetch";
import useTournamentStatisticsDetail from "./../hooks/useFetchDetail";
import useTeamAndNation from "./../hooks/useFetchTeamAndNation";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import columns from "./../const/Group";
import Acumalation from "./../const/Acumulation";
import minAppOptions from "./../const/minApp";
import {
  Box,
  CircularProgress,
  FormControl,
  MenuItem,
  PaginationItem,
} from "@mui/material";
import groupType from "./../const/groupTypeDetail";
import Tab from "../components/stat_table/Tab/Tab";
import { FormProvider, useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import Position from "../components/stat_table/Position/Position";
import TypeEQ from "../components/stat_table/TypeEQ/TypeEQ";
import Accmulation from "../components/stat_table/Accumulation/Accmulation";
import PreferredFoot from "../components/stat_table/PreferredFoot/PreferredFoot";
import Appearances from "../components/stat_table/Appearances/Appearances";
import Age from "../components/stat_table/Age/Age";
import Team from "../components/stat_table/Team/Team";
import Nationality from "../components/stat_table/Nationality/Nationality";
import HeaderRow from "../components/stat_table/HeaderTable/HeaderTable";
import TableRow from "../components/stat_table/TableRow/TableRow";
import ShowTeam from "../components/stat_table/Team/ShowTeam";
import { OpenProvider } from "./../hooks/useOpenTeamAndNation";
import ShowNationality from "../components/stat_table/Nationality/ShowNationality";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TableRowLoading from "../components/stat_table/TableRow/TableRowLoading";

interface InitialData {
  data: Array<{
    header: string;
    accessorKey: string;
    sorted: boolean;
  }>;
}
const IndexPage = () => {
  const [page, setPage] = useState(1);
  const [sorted, setSorted] = useState("-goals");
  const [order, setOrder] = useState("-goals"); // for details
  const [group, setGroup] = useState("Summary");
  const [minApps, setMinApps] = useState(minAppOptions[0].value);
  const [accumulation, setAccumulation] = useState(Acumalation[0].value);
  const [accumulationDetail, setAccumulationDetail] = useState(
    Acumalation[0].value
  );
  const selectedColumns = columns.find((column) => column.name === group)!.data;
  const [filter, setFilter] = useState("");
  const [fields, setFields] = useState<String>(
    selectedColumns.map((item: any) => item.accessorKey).join(",")
  );
  const [initialData, setInitialData] = useState<InitialData>({
    data: columns[columns.length - 1].data, // Your initial data here
  });
  const [clearFilter, setClearFilter] = useState(false);
  const methods = useForm({
    defaultValues: {
      typeEQ: "o",
      nationalityoption: "allnation",
      teamoption: "allteam",
    },
    shouldUnregister: false,
  });
  const queryClient = useQueryClient();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setPage(value);
  };
  const { data: apiResponse, isLoading } = useTournamentStatistics(
    page,
    sorted,
    group.toLowerCase(),
    minApps,
    accumulation
  ); // Use the custom hook
  const { data: apiResponseDetail, isLoading: loadingDetail } =
    useTournamentStatisticsDetail(
      page,
      fields,
      filter,
      accumulationDetail,
      order
    );
  const { data: apiTeamAndNation, isLoading: loadingTeamAnndNation } =
    useTeamAndNation(); // customize hook
  const handleColumnClick = (header: string) => {
    if (sorted === "-" + header) {
      setSorted(header);
    } else {
      setSorted("-" + header);
    }
    setPage(1);
  };
  const handleColumnDetailClick = (header: string) => {
    console.log(header);
    if (order === "-" + header) {
      setOrder(header);
    } else {
      setOrder("-" + header);
    }
    setPage(1);
    queryClient.refetchQueries("tournamentStatisticsDetail");
  };
  const handleGroupClick = (name: string) => {
    setGroup(name);
    setPage(1);
    setAccumulation(Acumalation[0].value);
    setMinApps(minAppOptions[0].value);
    columns.map((item) => {
      if (item.name === name) {
        setSorted("-" + columns[item.id].data[3].accessorKey);
      }
    });
  };
  const handleChangeAccumulator = (event: SelectChangeEvent) => {
    setAccumulation(event.target.value as string);
    setPage(1);
  };
  const handleChangeMinApps = (value: string) => {
    setMinApps(value);
    setPage(1);
  };

  const handleInitialDataChange = (newData: InitialData) => {
    setInitialData(newData);
  };
  const [columnDetail, setColumnDetail] = useState(initialData);

  const onSubmit = (data: any) => {
    console.log(data);
    setClearFilter(false);
    const selected = Object.keys(data).filter(
      (key) => data[key] == true || Array.isArray(data[key])
    );
    const positionSelected = Object.keys(data).filter(
      (key) => data[key] == "position"
    );
    const typeEQSelected = data["typeEQ"];
    const preferredFoot = data["preferredFoot"];
    const appearances = data["appearances"];
    const appearValue = data["appearValue"];
    const age = data["age"];
    const ageValue = data["ageValue"];
    const team = Object.keys(data).filter((key) => data[key] == "team");
    const nationality = Object.keys(data).filter(
      (key) => data[key] == "nationality"
    );
    const filterValue =
      (typeEQSelected.length > 1 ? "type.EQ." + typeEQSelected + "," : "") +
      (preferredFoot.length > 1
        ? "preferredFoot.EQ." + preferredFoot + ","
        : "") +
      (appearances.length > 1
        ? `appearances.${appearances}.${appearValue},`
        : "") +
      (age.length > 1 ? `age.${age}.${ageValue},` : "") +
      (team?.length > 0 && data["teamoption"] !== "allteam"
        ? `team.in.${team.join("~")},`
        : "") +
      (nationality?.length > 0 && data["nationalityoption"] !== "allnation"
        ? `nationality.in.${nationality.join("~")},`
        : "") +
      "position.in." +
      positionSelected.join("~");
    setFields(selected.join(","));
    setFilter(filterValue);
    setColumnDetail(initialData);
    setAccumulationDetail(data["accumulation"]);
    // Call the refetch function to trigger data refetch
    queryClient.refetchQueries("tournamentStatisticsDetail");
  };

  const handleClearFilter = () => {
    setClearFilter(true);
    methods.reset();
    setFilter("");
    queryClient.refetchQueries("tournamentStatisticsDetail");
  };
  return (
    <div className="p-6  containerPage font-beVietNam">
      <div className="w-[889px] py-4 px-4 flex flex-col gap-3.5 shadow-custom rounded-2xl min-h-[700px]">
        <h5 className="text-basic text-base font-bold not-italic">
          Player Statistics
        </h5>
        <div className="flex items-center pb-3.5 border-b border-[#cdded] gap-2">
          {columns.map((item) => (
            <button
              key={item.id}
              className={group === item.name ? "button-active" : "button"}
              onClick={() => handleGroupClick(item.name)}
            >
              {item.name}
            </button>
          ))}
        </div>
        {/* radio input and selected button  */}
        {group === "Detailed" ? null : (
          <div className="flex justify-between">
            {/* SummaryMin  */}
            <form className="text-xsm not-italic font-normal leading-4 flex gap-5">
              {minAppOptions.map((item) => (
                <div
                  key={item.value}
                  className="flex gap-2 items-center hover:cursor-pointer"
                >
                  <input
                    type="radio"
                    id={item.value} // Set the 'id' attribute for the input element
                    value={item.value}
                    name="minApps"
                    checked={minApps === item.value}
                    onChange={() => handleChangeMinApps(item.value)}
                    className="hover:cursor-pointer w-5 h-5"
                  />
                  <label htmlFor={item.value} className="hover:cursor-pointer">
                    {item.label}
                  </label>
                </div>
              ))}
            </form>
            {/* accumulation */}
            <div className="flex items-center text-xsm font-normal leading-4 gap-3.5 relative">
              <p>Accumulation</p>
              <Box sx={{ minWidth: 100, fontSize: "12px" }}>
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={accumulation}
                    onChange={handleChangeAccumulator}
                    sx={{ fontSize: "12px", height: 30, width: 170 }}
                  >
                    {Acumalation.map((item, index) => (
                      <MenuItem
                        value={item.value}
                        key={index}
                        sx={{ fontSize: "12px" }}
                      >
                        {item.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
        )}
        {group === "Detailed" ? (
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="text-xs flex flex-col gap-4"
            >
              <div className="flex justify-between">
                <TypeEQ />
                <Appearances clear={clearFilter} />
                <Accmulation clear={clearFilter} />
              </div>
              <div className="flex justify-between">
                <Age clear={clearFilter} />
                <Position />
                <PreferredFoot clear={clearFilter} />
              </div>
              <OpenProvider>
                <div>
                  <div className="flex justify-between">
                    <Nationality clear={clearFilter} />
                    <Team clear={clearFilter} />
                  </div>
                  {loadingTeamAnndNation ? (
                    <></>
                  ) : (
                    <>
                      <ShowNationality
                        nation={apiTeamAndNation?.data.nationalities}
                      />
                      <ShowTeam teams={apiTeamAndNation?.data.teams} />
                    </>
                  )}
                </div>
              </OpenProvider>
              <Tab
                tabs={groupType}
                initialData={initialData}
                onInitialDataChange={handleInitialDataChange}
              />
              <div className="flex gap-5">
                <button
                  type="submit"
                  className="px-4 py-2 text-xsm uppercase bg-[#2187E5] text-white"
                >
                  Apply
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-xsm uppercase bg-[#2187E5] text-white"
                  onClick={() => handleClearFilter()}
                >
                  Clear filter
                </button>
              </div>
            </form>
          </FormProvider>
        ) : null}

        {/* table  */}
        <table className="">
          <thead>
            <HeaderRow
              group={group}
              columnDetail={columnDetail}
              selectedColumns={selectedColumns}
              sorted={sorted}
              handleColumnClick={handleColumnClick}
              order={order}
              handleColumnDetailClick={handleColumnDetailClick}
            />
          </thead>
          {isLoading || loadingDetail ? (
            <tbody>
              {Array.from({ length: 20 }, (_, index) => index + 1).map(
                (number) => (
                  <TableRowLoading
                    key={number}
                    number={number}
                    numberColumn={
                      group === "Detailed" ? columnDetail.data.length : 9
                    }
                  />
                )
              )}
            </tbody>
          ) : (
            <tbody>
              {group === "Detailed"
                ? apiResponseDetail?.data.results.map(
                    (row: any, id: number) => (
                      <TableRow
                        key={id}
                        index={id}
                        row={row}
                        columns={columnDetail.data}
                      />
                    )
                  )
                : apiResponse?.data.results.map((row: any, id: number) => (
                    <TableRow
                      key={id}
                      index={id}
                      row={row}
                      columns={selectedColumns}
                    />
                  ))}
            </tbody>
          )}
        </table>
        {/* pagination  */}
        {isLoading || loadingDetail ? (
          <></>
        ) : (
          <Stack spacing={2} className="mt-3">
            <Pagination
              count={
                group === "Detailed"
                  ? apiResponseDetail?.data.pages
                  : apiResponse?.data.pages
              }
              page={page}
              onChange={handleChange}
              renderItem={(item) => (
                <PaginationItem
                  {...item}
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: "#2187E5",
                      color: "white",
                    },
                  }}
                />
              )}
            />
          </Stack>
        )}
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default IndexPage;
