import { View, Text, TouchableOpacity } from "react-native";

export interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  selectedValue: string;
  onValueChange: (value: string) => void;
}

export default function RadioGroup({ options, selectedValue, onValueChange }: RadioGroupProps) {
  return (
    <View className="flex-row self-start flex-wrap gap-4"> 
      {options.map((option) => {
        const isSelected = selectedValue === option.value;
        
        return (
          <TouchableOpacity 
            key={option.value}
            onPress={() => onValueChange(option.value)}
            className="flex-row items-center"
            activeOpacity={0.8}
          >
            

            {/* Label Text */}
            <View className=" p-2 rounded-md flex-row items-center space-x-2">
            <Text className={`text-base ${isSelected ? "text-black bg-white font-semibold" : "text-white bg-transparent" } px-2 py-1 rounded-md`}>
              {option.label}
            </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}