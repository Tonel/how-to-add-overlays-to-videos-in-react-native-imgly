import React from 'react';
import { StyleSheet, View } from 'react-native';
import VideoWithOverlays from './src/components/VideoWithOverlays/VideoWithOverlays';

export default function App() {
    const imgLy = require('./src/assets/images/IMG_LY.png');

    return (
        <View style={styles.container}>
            <VideoWithOverlays
                videoComponentProps={{
                    source: {uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
                }}
                text={"IMG.LY"}
                imageSrc={imgLy}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
