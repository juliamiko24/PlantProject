import { Image, StyleSheet, FlatList, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/veggies.jpeg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to my plant app!</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Description</ThemedText>
        <ThemedText type="defaultSemiBold">
          App goals:
        </ThemedText>
        <ThemedText>
            Select a plant from the database and compare real-time sensor data to the plant's ideal
            growing conditions.
          </ThemedText>
          <ThemedText>
            Personalize plant tracking by naming plants and logging details like planting date,
            last watering, and other care notes.
          </ThemedText>
          <ThemedText>
            Monitor device battery levels to ensure continuous operation.
          </ThemedText>
          <ThemedText>
            Receive push notifications for upcoming frosts, extreme temperatures, or rain predictions
            using a Weather API.
          </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: My Plants</ThemedText>
        <ThemedText>
          Tap the 'My Plants' tab to learn more about this app.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const BulletList = () => {

}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
