// واجهة React الأساسية
import React from 'react';
import { sharedValue } from '@shared/schema';

function App() {
  return (
    <div>
      <h1>مشروع React يعمل بنجاح 🚀</h1>
      <p>قيمة مشتركة من shared: {sharedValue}</p>
    </div>
  );
}

export default App;
