import React, { useState } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'

import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'

// componentes de la aplicación
import ProyectItem from '@/components/SprintComponents/ProyectItem'

export default function HomeScreen() {
  return (
    <ThemedView style={styles.HomeScreenContainer}>
      <View style={styles.titleContainer}>
        <ThemedText type='title'>Proyectos</ThemedText>
      </View>
      <View style={styles.proyectContainer}>
        <ProyectItem />
      </View>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  HomeScreenContainer: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 22
  },
  titleContainer: {
    margin: 6,
    marginBottom: 22
  },
  proyectContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }
})
