import { Tabs } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import React from 'react'

import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'

// tipos para el custom drawee
type CustomDrawerItemProps = {
  label: string
  iconName: keyof typeof Ionicons.glyphMap
  onPress?: () => void
}

export default function TabLayout() {
  const colorScheme = useColorScheme()
  const navigation = useNavigation()

  // Componente personalizado para el título del header
  function HeaderTitle() {
    const colorScheme = useColorScheme()

    return (
      <View style={styles.headerTitleContainer}>
        <Ionicons
          name='rocket'
          size={20}
          color={Colors[colorScheme ?? 'light'].text}
        />
        <Text
          style={[
            styles.headerTitleText,
            { color: Colors[colorScheme ?? 'light'].text },
          ]}
        >
          Mi Aplicación
        </Text>
      </View>
    )
  }

  // Componente para cada Drawer Item personalizado
  function CustomDrawerItem({
    label,
    iconName,
    onPress,
  }: CustomDrawerItemProps) {
    const colorScheme = useColorScheme()

    return (
      <TouchableOpacity onPress={onPress} style={styles.drawerItemContainer}>
        <Ionicons
          name={iconName}
          size={24}
          color={Colors[colorScheme ?? 'light'].text}
        />
        <Text
          style={[
            styles.drawerItemText,
            { color: Colors[colorScheme ?? 'light'].text },
          ]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    )
  }

  // Componente para el contenido del Drawer
  function CustomDrawerContent(props: any) {
    const colorScheme = useColorScheme()

    return (
      <DrawerContentScrollView {...props}>
        <View style={styles.mainDrawerContainer}>
          <View style={styles.profileContainer}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100' }}
              style={styles.profileImage}
            />
            <Text
              style={[
                styles.profileName,
                { color: Colors[colorScheme ?? 'light'].text },
              ]}
            >
              Nombre del Usuario
            </Text>
          </View>

          <View style={styles.drawerContainer}>
            {/* Drawer Items personalizados */}
            <View style={styles.itemsContainer}>
              {/* Aquí van los otros ítems del drawer */}
              <CustomDrawerItem
                label='Home'
                iconName='home-outline'
                onPress={() => props.navigation.navigate('index')}
              />
              <CustomDrawerItem
                label='Explore'
                iconName='compass-outline'
                onPress={() => props.navigation.navigate('explore')}
              />
              <CustomDrawerItem
                label='Configuration'
                iconName='settings-outline'
                onPress={() => props.navigation.navigate('config')}
              />
              {/* Otros items adicionales... */}
            </View>

            {/* Boton para logout*/}
            <TouchableOpacity style={styles.logoutContainer}>
              <Ionicons
                name='log-out-outline'
                size={24}
                color={Colors[colorScheme ?? 'light'].text}
              />
              <Text
                style={[
                  styles.logoutText,
                  { color: Colors[colorScheme ?? 'light'].text },
                ]}
              >
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </DrawerContentScrollView>
    )
  }

  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerPosition: 'right',
        drawerStyle: {
          width: 300,
        },
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={{ marginRight: 15 }}
          >
            <Ionicons
              name='menu'
              size={48}
              color={Colors[colorScheme ?? 'light'].text}
            />
          </TouchableOpacity>
        ),
        // Oculta el botón del lado izquierdo
        headerLeft: () => null,
        headerTitle: () => <HeaderTitle />,
        headerStyle: { height: 110 },
      }}
      drawerContent={(props: any) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name='index' // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Home',
          title: 'overview',
        }}
      />
      <Drawer.Screen
        name='explore' // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'User',
          title: 'overview',
        }}
      />
    </Drawer>
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
  // drawer components
  profileContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  mainDrawerContainer: {},
  drawerContainer: {
    height: '100%',
    justifyContent: 'space-between',
  },
  // drawer items styles
  itemsContainer: {
    paddingTop: 20,
  },
  drawerItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 15,
    marginLeft: 8,
  },
  drawerItemText: {
    fontSize: 16,
    marginLeft: 10,
  },
  // logout content styles
  logoutContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  logoutText: {
    fontSize: 16,
    marginLeft: 10,
  },
})
