import { View, Text, TouchableOpacity } from "react-native";

export interface RadioOption<T extends string> {
  label: string;
  value: T;
}

interface RadioGroupProps<T extends string> {
  options: RadioOption<T>[];
  selectedValue: T;
  onValueChange: (value: T) => void;
}

export default function RadioGroup<T extends string>({ options, selectedValue, onValueChange }: RadioGroupProps<T>) {
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