import { colors } from "@/styles/colors";
import { PropsWithChildren } from "react";
import { TextInput, TextInputProps, View } from "react-native";

function Input({ children }: PropsWithChildren) {
  return (
    <View className='w-full h-14 flex-row items-center gap-3 p-3 border border-green-400 rounded-lg'>
      {children}
    </View>
  )
}

function Field(props: TextInputProps) {
  return (
    <TextInput {...props} className="flex-1 text-white text-base font-regular" placeholderTextColor={colors.gray[200]} />
  )
}

Input.Field = Field

export { Input }
