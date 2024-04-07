import { Input } from '@/components/input'
import { Alert, Image, View } from 'react-native'
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import { Button } from '@/components/button'
import { Link, router } from 'expo-router'
import { useState } from 'react'

const EVENT_ID = '9e9bd979-9d10-4915-b339-3786b1634f33'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleRegister() {
    try {
      if (!name.trim() || !email.trim()) {
        return Alert.alert('Inscrição', 'Preencha todos os campos')
      }
      setIsLoading(true)

      // const registerResponse = await api.post(`/events/${EVENT_ID}/attenddes`, {
      //   name, email
      // })

      // if (registerResponse.data.atte) {
      //   Alert.alert('Inscrição', 'inscrição realizada com sucesso !!!', [{ text: 'OK', onPress: () => router.push('/ticket') }])
      // }
      
      router.push('/ticket')
    } catch (error) {
      // if (axios.isAxiosError(error)) {
      //   if (String(error.response?.data.message).includes('already registered')) {
      //     return Alert.alert('Inscrição', 'Este email já está cadastrado')
      //   }
      // }
      Alert.alert('Inscrição', 'Não foi possivel fazer a inscrição')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <View className='flex-1 bg-green-500 items-center justify-center p-8'>
      <Image source={require('@/assets/logo.png')} className='h-16' resizeMode='contain' />
      <View className='w-full mt-12 gap-3'>
        <Input>
          <FontAwesome6
            name='user-circle'
            color={colors.green[200]}
            size={20}
          />
          <Input.Field placeholder='Nome completo' value={name} onChangeText={setName} />
        </Input>
        <Input>
          <MaterialIcons
            name='alternate-email'
            color={colors.green[200]}
            size={20}
          />
          <Input.Field value={email} onChangeText={setEmail} placeholder='E-mail' keyboardType='email-address' />
        </Input>
        <Button title='Realizar inscrição' isLoading={isLoading} onPress={handleRegister} />
        <Link href='/' className='text-gray-100 text-base font-bold text-center mt-8'>Já não possui ingresso?</Link>
      </View>
    </View>
  )
}
