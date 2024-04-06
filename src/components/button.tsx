import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Loading } from "./loading";
import { colors } from "@/styles/colors";

type Props = TouchableOpacityProps & {
  title: string,
  isLoading?: boolean
}

export function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      disabled={isLoading}
      style={{
        width: '100%',
        height: 50,
        backgroundColor: colors.orange[500],
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      }}
    >
      {
        isLoading ? <Loading /> : <Text className="text-green-500 text-base font-bold uppercase">{title}</Text>
      }
    </TouchableOpacity>
  )
}
