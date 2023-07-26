// VoiceCommandComponent.js
import React, { useState } from 'react';
import { ReactMicRecorder } from 'react-mic-recorder-to-mp3';
import axios from 'axios';

const VoiceCommandComponent = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [transcribedText, setTranscribedText] = useState('');

  const handleAudioData = async (audioData) => {
    setAudioBlob(audioData.blob);

    // Send the audio data to the backend for transcription
    const formData = new FormData();
    formData.append('audio', audioData.blob);

    try {
      const response = await axios.post('/process_voice_command/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Update the transcribed text state with the result from the backend
      setTranscribedText(response.data.transcription);
    } catch (error) {
      console.error('Error transcribing audio:', error);
      // Handle error or show appropriate feedback to the user
    }
  };

  return (
    <div>
      <ReactMicRecorder
        record={isRecording}
        onStop={handleAudioData}
        mimeType="audio/mp3"
      />
      <button onClick={() => setIsRecording(!isRecording)}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      {transcribedText && <p>Transcribed Text: {transcribedText}</p>}
    </div>
  );
};

export default VoiceCommandComponent;
