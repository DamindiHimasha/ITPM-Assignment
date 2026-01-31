const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    {
      tcId: 'Pos_Fun_0001',
      name: 'Formal Greeting',
      input: 'aayuboovan, kohomadha oyaata?',
      expected: 'ආයුබෝවන්, කොහොමද ඔයාට?',
      category: 'Greeting / request / response',
      grammar: 'Greeting',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0002',
      name: 'Complex Daily Activity',
      input: 'mama udheema kema uyala iskole yanna laeesthi una.',
      expected: 'මම උදේම කෙම උයල ඉස්කොලෙ යන්න ලෑස්ති උන.',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0003',
      name: 'Polite Request',
      input: 'karuNaakara mata vathura dhenna.',
      expected: 'කරුණාකර මට වතුර දෙන්න.',
      category: 'Greeting / request / response',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0004',
      name: 'Mixed Tech Term',
      input: 'mage laptop eka on venne naehae.',
      expected: 'mage laptop එක on වෙන්නෙ නැහැ.',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0005',
      name: 'Plural Pronoun',
      input: 'api okkoma heta kandy yanavaa.',
      expected: 'අපි ඔක්කොම හෙට kandy යනවා.',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0006',
      name: 'Weather Inquiry',
      input: 'adha vahinna vagee nedha?',
      expected: 'අද වහින්න වගේ නේද?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_007',
      name: 'Banking/Numbers',
      input: 'Rs 500k bank ekata dhaanna',
      expected: 'Rs 500ක් bank එකට දාන්න',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_008',
      name: 'Medical Context',
      input: 'mata asaniipayi, beeth ganna oona.',
      expected: 'මට අසනීපයි, බේත් ගන්න ඕන.',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_009',
      name: 'Sibling Context',
      input: 'mage akkaa dhaen office gihin.',
      expected: 'mage අක්කා දැන් office ගිහින්.',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0010',
      name: 'Office Communication',
      input: 'meeting eka dhahaya venakan thiyenavaa.',
      expected: 'meeting එක දහය වෙනකන් තියෙනවා.',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0011',
      name: 'Shopping Question',
      input: 'meeka kiiyadha kiyala kiyanna.',
      expected: 'මේක කීයද කියල කියන්න.',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0012',
      name: 'Food/Restaurant',
      input: 'koththu ekak saha tea ekak dhenna.',
      expected: 'කොත්තු එකක් සහ tea එකක් දෙන්න.',
      category: 'Daily language usage',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0013',
      name: 'Future Intent',
      input: 'mama heta udhee ennam.',
      expected: 'මම හෙට උදේ එන්නම්.',
      category: 'Daily language usage',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0014',
      name: 'Location Inquiry',
      input: 'oyaa dhaen kohedha inne?',
      expected: 'ඔයා දැන් කොහෙද ඉන්නේ?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0015',
      name: 'Negative Statement',
      input: 'eyaa dhaen kaeema kanne naehae',
      expected: 'එයා දැන් කෑම කන්නෙ නැහැ',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0016',
      name: 'Directional Request',
      input: 'bus eka kohetadha yanne?',
      expected: 'bus එක කොහෙටද යන්නෙ?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0017',
      name: 'Mixed Abbreviations',
      input: 'mage NIC eka thaama aavee nae.',
      expected: 'mage NIC එක තාම ආවේ නැ.',
      category: 'Names / places / common English words',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0018',
      name: 'Sequential Tasks',
      input: 'mama veda ivara karala gedhara yanava.',
      expected: 'මම වැඩ ඉවර කරල ගෙදර යනවා.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0019',
      name: 'Travel Detail',
      input: 'flight eka heta udhee navaya hamaarata.',
      expected: 'flight එක හෙට උදේ නවය හමාරට.',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0020',
      name: 'Time Management',
      input: 'dhaen velaava kiiyadha balanna.',
      expected: 'දැන් වෙලාව කීයද බලන්න.',
      category: 'Daily language usage',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0021',
      name: 'Home Instruction',
      input: 'dhora vahalaa thiyanna epaa',
      expected: 'දොර වහලා තියන්න එපා',
      category: 'Daily language usage',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0022',
      name: 'Religious Term',
      input: 'api poya dhavasata pansal yamu.',
      expected: 'අපි පොය දවසට පන්සල් යමු.',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0023',
      name: 'Long-form News/Weather report transliteration with technical data',
      input: '2026 janavaari 31 dhina saDHAhaa kaalaguNa anaavaekiyata anuva, shrii lQQkaavee uthuru, uthuru-maedha, naegenahira saha maDhYAma paLaathvala vitin vita vaesi aethi viya haeka. praDhaana vaesi thaththva: mulathivu, thrikuNaamalaya, poLonnaaruva saha maathalee dhisthrikkavala aethaem sThaanavalata mi.mii. 50ta vaedi tharamaka thadha vaesi aethi viya haeki bava kaalaguNa vidhYaa dhepaarthameenthuva pavasayi. koLaBA saha avata: koLaBA pradheeshayee arDha vashayen valaakuLu piri kaalaguNayak pavathina athara, uShNathvaya selsiyas aQQshaka 30-31 pamaNa viya haeka.',
      expected: '2026 ජනවාරි 31 දින සඳහා කාලගුණ අනාවැකියට අනුව, ශ්‍රී ලංකාවේ උතුරු, උතුරු-මැද, නැගෙනහිර සහ මධ්‍යම පළාත්වල විටින් විට වැසි ඇති විය හැක. ප්‍රධාන වැසි තත්ත්ව: මුලතිවු, ත්‍රිකුණාමලය, පොළොන්නාරුව සහ මාතලේ දිස්ත්‍රික්කවල ඇතැම් ස්ථානවලට මි.මී. 50ට වැඩි තරමක තද වැසි ඇති විය හැකි බව කාලගුණ විද්‍යා දෙපාර්තමේන්තුව පවසයි. කොළඹ සහ අවට: කොළඹ ප්‍රදේශයේ අර්ධ වශයෙන් වලාකුළු පිරි කාලගුණයක් පවතින අතර, උෂ්ණත්වය සෙල්සියස් අංශක 30-31 පමණ විය හැක.',
      category: 'Long-form content',
      grammar: 'Complex sentence',
      length: 'L'
    },
    {
      tcId: 'Pos_Fun_0024',
      name: 'Historical context with complex regional names',
      input: 'shrii lQQkaavee ithihaasaya dhakuNu aasiyaava, agnidhiga aasiyaava haa indhiyan saagaraya aethuLu indhiyaanu upa mahaadhviipaya haa ee avata pradheeshavala ithihaasaya samaGA baeDHAii pavathii.',
      expected: 'ශ්‍රී ලංකාවේ ඉතිහාසය දකුණු ආසියාව, අග්නිදිග ආසියාව හා ඉන්දියන් සාගරය ඇතුළු ඉන්දියානු උප මහාද්වීපය හා ඒ අවට ප්‍රදේශවල ඉතිහාසය සමඟ බැඳෛඉ පවතී.',
      category: 'Historical/Geographic content',
      grammar: 'Complex sentence',
      length: 'L'
    }
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_0001',
      name: 'Zero Word Spacing',
      input: 'apigedharayannene',
      expected: 'අපිගෙදරයන්නෙනෙ',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0002',
      name: 'Excessive Vowels',
      input: 'mmaaaaa aaaavaaaaaa',
      expected: 'ම්මාආඅ ආආවාආආ',
      category: 'Malformed input',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0003',
      name: 'Symbols inside words',
      input: 'ma#ma yan@ava',
      expected: 'ම#ම යන්@අව',
      category: 'Special characters',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0004',
      name: 'Uncommon Abbreviation',
      input: 'ASAP enna',
      expected: 'ඒඑස්ඒපී එන්න',
      category: 'Abbreviations',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0005',
      name: 'Mathematical Equation',
      input: '100+200=300',
      expected: '100+200=300',
      category: 'Mathematical symbols',
      grammar: 'Equation',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0006',
      name: 'Complex Punctuation',
      input: 'mama yanava...???!!!',
      expected: 'මම යනවා...???!!!',
      category: 'Punctuation handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0007',
      name: 'Mixed Language URL',
      input: 'meka\ngoogle.com/search',
      expected: 'මෙක\ngoogle.com/search',
      category: 'URLs and web content',
      grammar: 'Mixed format',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0008',
      name: 'Random Case Shift',
      input: 'mAmA gEdHaRa yAnAvA',
      expected: 'මම ගෙඩ්හRඅ යනව',
      category: 'Case sensitivity',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0009',
      name: 'HTML/Code Tags',
      input: '<b>haloo</b>',
      expected: '<b>හලෝ</b>',
      category: 'HTML markup',
      grammar: 'Tagged text',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0010',
      name: 'Incorrect Phonetics',
      input: 'shree lankawa',
      expected: 'ශ්රී ලංකාව',
      category: 'Phonetic variation',
      grammar: 'Simple sentence',
      length: 'S'
    }
  ],
  
  ui: {
    tcId: 'Pos_UI_001',
    name: 'Real-time translation updates as typing',
    input: 'aayuboovan kohomadha',
    partialInput: 'aayubo',
    expectedFull: 'ආයුබෝවන් කොහොමද',
    category: 'Usability flow',
    grammar: 'Greeting',
    length: 'S'
  }
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
