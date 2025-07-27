const vocabList = [
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 41).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 48).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 38).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 2).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 79).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 35).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 39).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 92).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 1).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 28).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 39).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 17).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 22).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 99).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 30).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 74).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 98).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 73).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 45).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 34).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 99).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 42).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 24).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 8).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 67).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 47).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 56).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 25).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 20).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 88).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 31).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 45).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 30).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 70).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 45).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 53).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 72).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 74).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 5).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 52).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 86).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 54).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 45).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 87).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 7).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 68).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 46).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 85).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 36).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 24).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 83).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 66).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 55).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 43).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 6).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 69).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 51).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 43).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 51).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 62).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 14).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 61).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 74).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 28).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 18).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 64).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 64).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 17).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 68).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 35).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 5).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 53).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 37).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 29).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 30).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 21).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 45).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 44).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 32).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 83).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 33).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 27).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 3).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 79).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 76).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 16).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 15).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 95).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 53).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 51).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 43).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 12).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 49).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 75).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 53).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 90).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 40).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 45).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 100).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 57).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 52).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 58).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 94).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 41).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 19).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 47).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 51).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 16).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 57).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 85).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 69).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 44).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 76).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 20).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 93).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 33).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 61).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 33).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 82).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 20).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 12).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 65).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 96).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 2).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 9).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 22).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 44).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 28).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 30).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 55).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 12).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 69).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 1).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 81).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 37).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 40).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 71).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 50).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 57).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 84).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 100).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 32).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 62).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 90).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 67).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 33).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 82).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 63).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 83).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 15).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 7).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 54).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 47).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 82).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 17).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 13).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 61).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 27).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 52).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 68).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 98).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 98).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 72).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 43).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 94).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 62).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 78).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 35).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 41).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 58).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 75).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 76).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 97).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 99).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 30).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 69).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 65).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 14).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 60).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 9).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 5).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 80).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 13).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 90).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 11).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 47).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 41).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 48).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 59).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 49).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 76).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 26).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 70).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 53).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 97).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 72).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 31).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 96).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 7).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 92).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 16).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 91).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 86).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 89).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 61).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 54).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 28).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 6).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 95).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 89).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 67).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 81).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 85).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 3).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 87).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 19).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 13).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 37).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 72).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 50).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 97).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 99).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 53).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 70).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 37).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 36).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 39).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 19).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 81).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 78).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 21).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 65).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 54).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 70).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 94).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 70).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 6).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 78).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 33).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 19).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 90).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 14).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 13).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 86).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 10).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 79).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 90).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 76).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 40).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 71).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 25).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 74).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 93).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 97).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 71).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 33).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 83).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 60).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 11).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 100).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 36).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 86).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 11).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 24).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 42).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 87).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 81).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 60).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 55).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 75).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 95).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 2).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 83).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 90).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 83).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 56).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 20).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 59).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 32).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 4).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 96).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 72).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 13).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 88).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 84).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 79).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 73).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 46).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 69).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 93).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 24).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 8).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 33).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 8).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 99).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 15).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 3).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 44).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 5).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 28).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 92).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 58).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 50).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 3).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 3).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 2).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 9).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 25).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 76).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 66).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 60).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 12).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 85).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 93).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 9).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 65).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 23).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 33).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 99).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 13).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 4).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 27).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 89).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 87).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 92).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 46).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 85).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 87).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 80).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 42).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 53).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 42).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 49).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 87).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 78).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 98).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 57).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 48).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 96).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 42).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 100).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 85).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 10).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 49).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 16).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 63).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 77).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 10).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 48).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 56).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 47).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 42).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 80).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 4).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 38).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 52).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 10).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 55).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 87).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 66).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 70).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 82).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 3).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 21).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 1).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 9).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 88).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 79).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 4).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 69).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 58).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 75).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 20).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 9).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 22).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 44).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 26).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 59).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 74).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 12).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 84).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 66).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 23).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 94).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 75).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 57).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 21).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 57).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 37).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 93).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 76).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 65).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 22).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 82).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 17).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 19).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 88).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 22).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 81).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 91).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 26).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 100).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 50).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 23).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 37).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 66).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 6).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 61).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 25).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 69).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 38).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 63).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 60).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 9).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 71).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 86).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 64).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 1).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 31).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 90).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 77).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 67).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 22).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 62).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 73).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 94).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 38).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 87).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 18).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 18).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 10).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 58).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 31).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 1).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 60).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 28).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 69).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 66).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 86).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 10).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 92).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 58).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 21).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 74).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 91).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 9).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 96).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 30).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 53).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 49).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 19).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 53).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 40).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 75).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 21).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 63).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 56).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 93).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 77).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 68).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 95).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 11).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 56).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 37).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 44).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 5).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 20).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 96).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 2).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 58).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 80).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 99).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 75).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 51).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 66).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 1).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 97).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 25).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 3).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 40).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 66).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 14).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 91).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 11).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 77).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 44).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 9).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 31).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 98).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 96).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 63).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 67).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 47).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 57).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 100).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 48).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 91).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 84).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 15).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 23).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 68).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 7).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 4).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 27).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 44).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 17).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 71).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 39).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 27).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 15).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 8).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 98).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 90).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 71).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 24).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 89).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 85).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 58).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 25).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 75).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 22).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 77).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 94).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 73).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 48).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 55).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 69).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 10).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 22).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 61).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 96).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 3).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 34).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 26).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 37).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 22).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 5).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 31).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 52).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 56).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 88).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 27).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 96).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 35).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 12).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 7).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 35).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 50).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 82).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 38).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 63).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 74).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 19).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 89).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 49).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 48).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 48).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 6).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 79).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 87).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 35).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 46).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 62).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 67).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 32).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 64).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 81).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 26).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 49).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 46).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 41).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 16).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 47).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 60).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 17).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 82).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 65).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 10).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 55).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 36).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 44).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 20).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 95).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 93).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 11).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 70).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 7).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 14).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 92).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 77).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 10).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 17).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 86).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 2).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 17).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 4).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 80).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 19).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 99).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 20).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 45).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 63).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 54).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 80).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 92).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 67).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 33).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 18).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 30).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 40).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 35).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 49).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 21).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 8).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 45).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 4).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 43).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 11).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 42).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 50).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 51).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 76).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 43).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 38).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 71).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 61).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 51).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 94).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 28).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 90).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 60).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 24).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 8).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 42).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 82).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 34).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 85).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 55).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 81).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 70).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 50).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 59).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 68).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 25).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 89).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 72).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 52).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 52).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 2).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 95).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 91).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 68).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 48).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 81).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 18).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 21).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 10).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 32).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 42).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 71).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 67).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 59).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 6).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 46).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 6).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 72).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 84).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 31).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 39).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 1).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 34).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 6).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 60).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 100).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 82).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 9).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 29).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 68).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 16).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 32).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 88).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 7).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 64).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 80).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 25).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 57).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 21).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 4).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 34).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 12).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 27).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 50).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 29).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 62).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 97).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 34).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 29).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 25).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 63).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 47).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 52).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 45).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 97).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 88).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 25).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 94).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 52).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 5).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 98).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 76).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 39).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 88).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 64).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 85).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 19).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 35).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 30).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 78).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 13).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 2).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 84).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 64).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 36).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 31).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 65).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 36).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 6).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 4).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 77).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 7).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 80).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 82).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 24).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 46).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 84).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 54).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 41).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 80).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 64).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 35).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 28).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 41).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 26).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 29).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 16).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 64).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 14).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 100).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 98).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 73).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 50).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 62).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 32).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 50).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 78).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 69).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 12).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 18).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 20).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 89).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 38).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 29).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 53).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 83).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 79).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 88).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 62).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 63).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 11).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 66).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 84).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 84).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 8).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 70).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 92).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 44).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 31).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 3).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 1).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 45).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 23).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 29).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 27).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 57).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 88).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 93).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 68).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 28).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 8).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 56).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 75).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 76).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 49).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 14).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 72).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 83).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 64).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 40).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 51).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 79).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 40).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 93).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 71).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 12).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 79).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 75).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 8).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 36).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 32).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 13).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 54).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 29).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 23).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 52).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 43).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 98).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 85).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 96).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 34).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 95).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 23).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 26).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 35).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 48).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 15).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 59).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 86).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 68).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 39).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 31).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 14).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 43).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 58).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 78).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 65).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 91).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 27).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 39).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 23).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 81).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 51).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 59).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 73).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 77).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 33).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 78).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 36).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 61).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 62).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 99).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 59).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 36).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 43).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 34).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 32).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 57).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 92).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 28).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 1).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 99).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 49).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 40).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 46).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 8).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 26).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 95).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 78).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 37).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 27).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 36).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 2).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 32).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 6).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 63).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 72).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 34).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 15).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 59).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 83).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 73).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 11).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 79).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 24).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 100).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 94).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 81).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 92).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 93).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 66).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 38).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 90).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 97).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 91).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 55).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 97).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 91).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 12).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 37).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 38).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 26).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 55).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 86).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 55).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 95).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 47).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 67).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 29).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 5).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 46).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 98).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 77).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 46).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 2).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 5).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 24).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 3).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 42).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 15).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 56).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 58).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 59).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 5).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 41).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 13).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 4).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 65).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 43).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 67).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 83).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 86).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 22).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 77).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 23).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 30).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 89).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 38).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 71).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 16).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 17).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 1).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 15).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 51).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 65).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 16).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 73).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 30).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 91).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 100).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 21).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 7).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 29).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 97).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 34).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 56).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 14).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 54).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 20).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 24).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 14).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 70).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 74).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 61).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 17).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 74).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 87).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 73).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 84).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 73).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 18).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 54).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 61).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 54).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 62).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 19).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 41).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 78).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 18).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Coherent",
    "meaning": "Logical and consistent",
    "meaning_bn": "যৌক্তিক এবং সুসংগত",
    "example": "She gave a clear and coherent argument (Example 7).",
    "type": "Adjective",
    "phonetic": "kəʊˈhɪə.rənt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 89).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 39).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 72).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 39).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 23).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 89).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Deteriorate",
    "meaning": "To become worse",
    "meaning_bn": "অবনতি ঘটানো বা খারাপ হয়ে যাওয়া",
    "example": "His health began to deteriorate rapidly (Example 74).",
    "type": "Verb",
    "phonetic": "dɪˈtɪə.ri.ə.reɪt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 95).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Justify",
    "meaning": "To show or prove to be right or reasonable",
    "meaning_bn": "ন্যায্যতা বা যৌক্তিকতা প্রমাণ করা",
    "example": "You will need to justify your reasoning (Example 60).",
    "type": "Verb",
    "phonetic": "ˈdʒʌs.tɪ.faɪ"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 40).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Feasible",
    "meaning": "Possible and practical to do easily",
    "meaning_bn": "সহজে করা সম্ভব এবং বাস্তবসম্মত",
    "example": "It’s not feasible to complete the project in two days (Example 94).",
    "type": "Adjective",
    "phonetic": "ˈfiː.zə.bəl"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 15).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 80).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 13).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  },
  {
    "word": "Benchmark",
    "meaning": "A standard or point of reference",
    "meaning_bn": "একটি মানদণ্ড বা তুলনার ভিত্তি",
    "example": "The test results became a benchmark for future assessments (Example 18).",
    "type": "Noun",
    "phonetic": "ˈbentʃ.mɑːk"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 41).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Optimize",
    "meaning": "To make the best or most effective use of something",
    "meaning_bn": "কোনো কিছু সর্বোচ্চ কার্যকরভাবে ব্যবহার করা",
    "example": "We must optimize the use of our resources (Example 26).",
    "type": "Verb",
    "phonetic": "ˈɒp.tɪ.maɪz"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 47).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Imminent",
    "meaning": "About to happen",
    "meaning_bn": "ঘটতে যাচ্ছে এমন; আসন্ন",
    "example": "The storm's arrival was imminent (Example 16).",
    "type": "Adjective",
    "phonetic": "ˈɪm.ɪ.nənt"
  },
  {
    "word": "Lucrative",
    "meaning": "Producing a great deal of profit",
    "meaning_bn": "লাভজনক বা প্রচুর মুনাফা আনয়নকারী",
    "example": "They accepted a lucrative job offer abroad (Example 56).",
    "type": "Adjective",
    "phonetic": "ˈluː.krə.tɪv"
  },
  {
    "word": "Notion",
    "meaning": "A belief or idea",
    "meaning_bn": "ধারণা বা বিশ্বাস",
    "example": "She dismissed the notion as ridiculous (Example 11).",
    "type": "Noun",
    "phonetic": "ˈnəʊ.ʃən"
  },
  {
    "word": "Alleviate",
    "meaning": "To make something less severe",
    "meaning_bn": "কিছুটা লাঘব করা বা কমিয়ে আনা",
    "example": "The medicine helped alleviate the pain (Example 18).",
    "type": "Verb",
    "phonetic": "əˈliː.vi.eɪt"
  }
];