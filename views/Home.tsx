// screens/Home.tsx
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import DateDisplay from '../components/DateDisplay';
import MoonDisplay from '../components/MoonDisplay';
import AgeAndPeaks from '../components/AgeAndPeaks';
import RiseAndSet from '../components/RiseAndSet';
import { fetchCurrentMoonData } from '../api/moonApi';
import type { MoonData } from '../types/moon';

const Home = () => {
  const [moonData, setMoonData] = useState<MoonData | null>(null);
  const [error, setError] = useState<Error | null>(null);

  console.log("Rendering Home with moonData:", moonData, "and error:", error);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const result = await fetchCurrentMoonData();
        if (mounted) setMoonData(result);
      } catch (e: any) {
        if (mounted) setError(e);
      }
    })();
    return () => { mounted = false; };
  }, []);

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Failed to load: {error.message}</Text>
      </View>
    );
  }

  if (!moonData) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
        <Text style={styles.loading}>Fetching moon data…</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <DateDisplay 
        phase={moonData["phase_name"]}
        // stage={moonData.stage}
        // optional if your component supports it later:
        // illumination={moonData.illumination ?? undefined}
      />
      <MoonDisplay />
      <AgeAndPeaks
        // you can display “in 2 days: full moon” etc.
        // daysUntilFull={moonData.daysUntilFull ?? undefined}
        // daysUntilNew={moonData.daysUntilNew ?? undefined}
        // age={moonData.age ?? undefined}
      />
      <RiseAndSet
        // rise={moonData.rise ?? undefined}
        // set={moonData.set ?? undefined}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'flex-start', paddingHorizontal: 20 },
  center: { flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' },
  loading: { color: '#fff', marginTop: 8 },
  error: { color: 'crimson', textAlign: 'center', padding: 16 },
});

export default Home;