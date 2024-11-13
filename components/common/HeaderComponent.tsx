import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useColorScheme } from 'react-native'
import { Colors } from '@/constants/Colors'

interface HeaderComponentProps {
  title: string
  iconName: keyof typeof Ionicons.glyphMap
}

function HeaderComponent({ title, iconName }: HeaderComponentProps) {
  const colorScheme = useColorScheme()

  return (
    <View style={styles.headerTitleContainer}>
      <Ionicons
        name={iconName}
        size={20}
        color={Colors[colorScheme ?? 'light'].text}
      />
      <Text
        style={[
          styles.headerTitleText,
          { color: Colors[colorScheme ?? 'light'].text },
        ]}
      >
        {title}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8, // Espacio entre el ícono y el texto
  },
})

export default HeaderComponent
