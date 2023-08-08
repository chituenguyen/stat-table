import { useEffect, useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTheme } from "next-themes";

type Option = {
  label: string;
  value: string;
};

type OptionButtonProps = {
  options: Option[];
  name: string;
  clear?: boolean;
};

export default function OptionButton({ options, name, clear }: OptionButtonProps) {
  const { control } = useFormContext();
  const [age, setAge] = useState(options[0].value); // Use the initial value

  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value as string;
    setAge(selectedValue); // Keep the local state up to date (optional, if you want to display the selected label in the UI)
  };
  useEffect(()=>{
    if(clear){
      setAge(options[0].value);
    }
  },)
  const { resolvedTheme } = useTheme();

  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue={options[0].value}
        render={({ field }) => (
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <Select
                labelId={`demo-simple-select-label+${name}`}
                id={`demo-simple-select+${name}`}
                value={age}
                onChange={(e) => {
                  handleChange(e);
                  field.onChange(e.target.value); // Update the value in the Controller's field
                }}
                sx={{fontSize:12, height:30,border: resolvedTheme === "dark" ? "1px solid #555" : "",
                color: resolvedTheme === "dark" ? "#aaa" : "",}}
              >
                {options.map((item) => (
                  <MenuItem key={item.value} value={item.value} sx={{fontSize:"12px"}}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        )}
      />
    </div>
  );
}
