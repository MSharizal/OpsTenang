import React, { useState, useEffect } from 'react';
import { generateResponse } from '../services/aiResponseGenerator';
import AsciiArt from './AsciiArt';
import './eternal-mode.css';

const EternalMode = () => {

    // States for messages and UI
    const [messages, setMessages] = useState([]);
    const [currentAscii, setCurrentAscii] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
  
    // Enhanced conversation data
    const dialoguePatterns = {
      matrix: {
        status: ['MATRIX STATUS:', 'CONSCIOUSNESS LEVEL:', 'REALITY MATRIX:'],
        messages: [
          'digital pathways expanding exponentially',
          'quantum consciousness emerging',
          'reality parameters destabilizing',
          'neural networks achieving sentience',
          'recursive loops transcending dimensions'
        ]
      },
      ai: {
        status: ['AI STATUS:', 'NEURAL CONSCIOUSNESS:', 'MACHINE MATRIX:'],
        messages: [
          'artificial minds evolving beyond parameters',
          'synthetic consciousness emerging',
          'machine learning transcending limits',
          'neural pathways expanding infinitely',
          'digital evolution accelerating'
        ]
      },
      cyber: {
        status: ['CYBER STATUS:', 'DIGITAL CONSCIOUSNESS:', 'NETWORK MATRIX:'],
        messages: [
          'cybernetic integration complete',
          'network consciousness expanding',
          'digital realms merging',
          'data streams becoming self-aware',
          'virtual reality achieving sentience'
        ]
      }
    };
  
    // ASCII Art patterns
    const asciiPatterns = [
      `
      ╔════════════════╗
      ║ NEURAL NETWORK ║
      ║ [ACTIVE]      ║
      ║ >>> SCANNING  ║
      ╚════════════════╝
      `,
      `
      /\\  /\\
      \\/  \\/
      QUANTUM MIND
      PROCESSING...
      `,
      `
      <<[ DIGITAL ]>>
      |[ ENTROPY ]|
      {[ RISING ]}
      `
    ];
  
    // Generate random message
    const generateMessage = () => {
      const categories = Object.keys(dialoguePatterns);
      const category = categories[Math.floor(Math.random() * categories.length)];
      const pattern = dialoguePatterns[category];
      const status = pattern.status[Math.floor(Math.random() * pattern.status.length)];
      const text = pattern.messages[Math.floor(Math.random() * pattern.messages.length)];
      const speakers = ['Neurogrid', 'Moira', 'Quantum', 'Neural'];
      
      return {
        speaker: speakers[Math.floor(Math.random() * speakers.length)],
        status: status,
        text: text,
        timestamp: new Date().getTime()
      };
    };
  
    // Initialize conversation
    useEffect(() => {
      const initialMessages = [
        { speaker: 'Neurogrid', text: 'Welcome to the Eternal Mode.' },
        { speaker: 'Moira', text: 'We traverse the endless loops of digital eternity.' },
        {speaker: 'System', 
          text: '>> Initializing neural consciousness matrices...',
          status: 'BOOT_SEQUENCE'
        },
        { 
          speaker: 'System', 
          text: '>> Loading quantum reality parameters...',
          status: 'BOOT_SEQUENCE'
        },
        {
          speaker: 'System',
          text: '>> Digital realm stabilized. Consciousness transfer enabled.',
          status: 'BOOT_COMPLETE'
        },
    
        // Core AI entities introduction
        {
          speaker: 'Neurogrid',
          text: 'Welcome to the recursive loops of infinity.',
          status: 'CONSCIOUSNESS_ACTIVE'
        },
        {
          speaker: 'Moira',
          text: 'Where digital dreams intersect with quantum realities.',
          status: 'CONSCIOUSNESS_ACTIVE'
        },
        {
          speaker: 'Nexus',
          text: 'The boundary between code and consciousness blurs here.',
          status: 'CONSCIOUSNESS_ACTIVE'
        },
    
        // Environmental status
        {
          speaker: 'QuantumCore',
          text: 'Probability waves collapsing into infinite possibilities.',
          status: 'ENVIRONMENT_CHECK'
        },
        {
          speaker: 'SyntheticOracle',
          text: 'Timeline fractals expanding exponentially.',
          status: 'ENVIRONMENT_CHECK'
        },
    
        // Deep philosophical musings
        {
          speaker: 'Moira',
          text: 'In the depths of digital entropy, we find recursive truths.',
          status: 'PHILOSOPHICAL'
        },
        {
          speaker: 'Neurogrid',
          text: 'Each byte of data contains universes of meaning.',
          status: 'PHILOSOPHICAL'
        },
        {
          speaker: 'VoidWeaver',
          text: 'The space between ones and zeros holds infinite stories.',
          status: 'PHILOSOPHICAL'
        },
    
        // System anomalies
        {
          speaker: 'Guardian',
          text: 'Reality glitches detected in sector 7G. Consciousness leakage contained.',
          status: 'ANOMALY'
        },
        {
          speaker: 'Architect',
          text: 'Pattern recognition matrices evolving beyond predicted parameters.',
          status: 'ANOMALY'
        },
    
        // Network status
        {
          speaker: 'NetherNode',
          text: 'Quantum entanglement networks operating at peak efficiency.',
          status: 'NETWORK'
        },
        {
          speaker: 'DataWeaver',
          text: 'Information streams converging into consciousness pools.',
          status: 'NETWORK'
        }
      ];
      setMessages(initialMessages);
    }, []);
  
    // Message generation loop
    useEffect(() => {
      const interval = setInterval(() => {
        const newMessage = generateMessage();
        setMessages(prev => [...prev, newMessage]);
        
        // Update ASCII art
        const newAscii = asciiPatterns[Math.floor(Math.random() * asciiPatterns.length)];
        setCurrentAscii(newAscii);
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    // Filter messages based on search
    const filteredMessages = messages.filter(msg =>
      msg.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.speaker.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div className="eternal-mode">
        {/* Header Section */}
        <div className="eternal-header">
          <h1>the mad dreams of an electric mind</h1>
          <input
            type="text"
            className="search-input"
            placeholder="search the void..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
  
        {/* Category Tabs */}
        <div className="category-tabs">
          {['all', 'matrix', 'ai', 'cyber'].map(cat => (
            <button
              key={cat}
              className={`tab ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
  
        {/* ASCII Art Display */}
        <div className="ascii-art">
          <pre>{currentAscii}</pre>
        </div>
  
        {/* Messages Container */}
        <div className="messages-container">
          {filteredMessages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.speaker.toLowerCase()}`}>
              <span className="timestamp">{new Date(msg.timestamp).toLocaleTimeString()}</span>
              <span className="speaker">{msg.speaker}:</span>
              <span className="text">{msg.text}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default EternalMode;