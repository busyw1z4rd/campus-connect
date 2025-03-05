import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          backgroundColor: '#0074D9', // Navbar color
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          height: 70,
          position: 'absolute',
          borderTopWidth: 0,
          elevation: 10, // Adds shadow effect
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      {/* How to Go (Left) */}
      <Tabs.Screen
        name="howtogo"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="bus.fill" color={color} />,
        }}
      />

      {/* Ticket (Center, Larger) */}
      <Tabs.Screen
        name="tickets"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={32} name="ticket.fill" color={color} />,
        }}
      />

      {/* Chat/Forum (Right) */}
      <Tabs.Screen
        name="chat"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="bubble.left.and.bubble.right.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
