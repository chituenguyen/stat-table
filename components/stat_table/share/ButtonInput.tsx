import { useEffect, useState } from "react";
import { useFormContext, Controller, useWatch } from "react-hook-form";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTheme } from "next-themes";

type Option = {
  label: string;
  value: string;
};
type Props = {
  options: Option[];
  name: string;
  value: string;
  clear?: boolean;
};

const ButtonInput: React.FC<Props> = ({ options, name, value, clear }) => {
  const { control, register } = useFormContext();
  const [age, setAge] = useState(options[0].value); // Use the initial value

  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value as string;
    setAge(selectedValue); // Keep the local state up to date (optional, if you want to display the selected label in the UI)
  };
  useEffect(() => {
    if (clear) {
      setAge(options[0].value);
    }
  }, [clear]);
  const appearances = useWatch({ name: name });
  const { resolvedTheme } = useTheme();

  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue={options[0].value}
        render={({ field }) => (
          <div className="flex gap-2 relative">
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
                  sx={{
                    fontSize: 12,
                    height: 30,
                    border: resolvedTheme === "dark" ? "1px solid white" : "",
                    color: resolvedTheme === "dark" ? "white" : "",
                  }}
                >
                  {options.map((item) => (
                    <MenuItem
                      key={item.value}
                      value={item.value}
                      sx={{ fontSize: 12 }}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <input
              type="text"
              {...register(value)}
              className="border w-[70px] px-2"
              disabled={appearances === "a" || appearances === undefined}
            />
          </div>
        )}
      />
    </div>
  );
};

export default ButtonInput;
