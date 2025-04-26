import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function Botones({ onIncrementar, onReiniciar, onDisminuir }) {
  return (
    <View style={styles.contenedor}>
      <TouchableOpacity 
        style={[styles.boton, styles.botonIncrementar]} 
        onPress={onIncrementar}
      >
        <Text style={styles.textoBoton}>Clic</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.boton, styles.botonReiniciar]} 
        onPress={onReiniciar}
      >

        <Text style={styles.textoBoton}>Reiniciar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.boton, styles.botonDisminuir]} 
        onPress={onDisminuir}
      >
        
        <Text style={styles.textoBoton}>- Disminuir</Text>
        
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start', // Cambiado a 'flex-start'
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10, // Reducido el padding vertical superior
    marginTop: -20, // Compensación negativa para acercar
  },
  boton: {
    paddingVertical: 12, // Reducido ligeramente
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '80%',
    marginVertical: 6, // Reducido el espacio entre botones
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  botonIncrementar: {
    backgroundColor: '#4CAF50',
    borderWidth: 2,
    borderColor: '#4CAF50',
    borderWidth: 2,       // Grosor del borde
    borderColor: 'white', // Color del borde (blanco)
  },
  botonReiniciar: {
    backgroundColor: '#2196F3',
    borderWidth: 2,
    borderColor: '#2196F3',
    borderWidth: 2,       // Grosor del borde
    borderColor: 'white', // Color del borde (blanco)
  },
  botonDisminuir: {
    backgroundColor: '#F44336',
    borderWidth: 2,
    borderColor: '#F44336',
    borderWidth: 2,       // Grosor del borde
    borderColor: 'white', // Color del borde (blanco)
  },
  textoBoton: {
    fontSize: 16, // Tamaño ligeramente reducido
    fontWeight: '600',
    color: '#FFFFFF',
  },
});