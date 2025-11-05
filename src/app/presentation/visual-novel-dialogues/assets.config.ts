
// This config defines all models and static assets used by the Visual Novel component
//  The data structures describe how dialogue scenes, characters, expressions, and achievements are presented and rendered in the frontend


/**
 * Background image registry for all available visual novel scenes.
 * Each key is a logical scene name used by dialogues (e.g. "hallway").
 * The value is a relative path to the image within our /assets folder.
 */
export const Backgrounds = {
  hallway: 'assets/novel/main/bg01-hallway.jpg',
  dorm: 'assets/novel/main/bg02-dorm.jpg',
  girl_dorm: 'assets/novel/main/girl-dorm.jpg',
};

/**
 * Defines a character's image set (base + layered eyes & mouth).
 * To animate emotions or speech dynamically.
 */
export interface CharacterAsset {
  base: string;
  eyes: { [key: string]: string };
  mouth: { [key: string]: string };
}


/**
 * Describes a single character's live state within the current scene.
 * Tracks expression, visibility, and breathing animation intervals.
 */
export interface CharacterState {
  name: string;
  visible: boolean;
  base: string;
  eyes: string;
  mouth: string;
  isBreatheActive: boolean;
  blinkInterval?: any;
  mouthInterval?: any;
  breatheDelay?: string;
  breatheDuration?: string;
}

/**
 * NestedTable allows embedding of data tables within dialogue scenes. (Tuples, or unnormalized tables can be displayed as NestedTables in the frontend)
 */
export interface NestedTable {
  headers: string[];
  rows: (string | NestedTable)[][];
}

/**
 * Represents a selectable choice in a dialogue scene,
 * including text and navigation to the next dialogue or scene.
 */
export interface DialogueChoice {
  text: string;
  next: string | number | SceneNavigation;
}

/**
 * Describes a jump to another scene within the same dialogue flow.
 */
export interface SceneNavigation {
  scene: string;
  index: number;
}

/**
 * A single line of dialogue (spoken text, image, video, table) within a scene.
 * Can include characters, background, choices, tables, or achievement triggers.
 */
export interface DialogueEntry {
  text: string;
  next?: number | string | SceneNavigation;
  choices?: DialogueChoice[];
  table?: NestedTable;
  background?: string;
  characters?: {
    index: number;   // 0: Danny, 1: Anna, 2: Larissa
    name: string;    // "danny", "anna", or "larissa"
    eyes: string;    // "grin", "joy", "smile"
    mouth: string;   // "neutral0", "smile0", "smile1"
    breathe?: boolean;
  }[];
  videoUrl?: string;
  imageUrl?: string;
  achievement?: {
    title: string;
    description: string;
    badgeImage: string;
  };
}

/**
 * A complete map of all dialogues grouped by scene name.
 * Each scene is an array of DialogueEntry objects.
 */
export interface DialogueMap {
  [key: string]: DialogueEntry[];
}


/**
 * Static definition of all character visual assets.
 * Each entry maps a character name to its corresponding eyes and mouth animation frames.
 *
 * These are loaded by the visual novel component to dynamically display talking animations and emotional states.
 */
export const characterAssets: Record<string, CharacterAsset> = {
  anna: {
    base: 'assets/novel/main/anna/anna.png',
    eyes: {
      bawl: 'assets/novel/main/anna/eyes-bawl.png',
      joy: 'assets/novel/main/anna/eyes-joy.png',
      nervous: 'assets/novel/main/anna/eyes-nervous.png',
      smile: 'assets/novel/main/anna/eyes-smile.png',
      upset: 'assets/novel/main/anna/eyes-upset.png',
      wow: 'assets/novel/main/anna/eyes-wow.png',
      blink: 'assets/novel/main/anna/eyes-joy.png'

    },
    mouth: {
      cry: 'assets/novel/main/anna/mouth-cry01.png',
      nervous0: 'assets/novel/main/anna/mouth-nervous00.png',
      nervous1: 'assets/novel/main/anna/mouth-nervous01.png',
      smile0: 'assets/novel/main/anna/mouth-smile00.png',
      smile1: 'assets/novel/main/anna/mouth-smile01.png',
      upset0: 'assets/novel/main/anna/mouth-upset00.png',
      upset1: 'assets/novel/main/anna/mouth-upset01.png',
      wow: 'assets/novel/main/anna/mouth-wow01.png',

      // Talking frames (the smile variant)
      talking1: 'assets/novel/main/anna/mouth-smile00.png',
      talking2: 'assets/novel/main/anna/mouth-smile01.png'
    }
  },
  larissa: {
    base: 'assets/novel/main/larissa/larissa.png',
    eyes: {
      grin: 'assets/novel/main/larissa/eyes-grin.png',
      smile: 'assets/novel/main/larissa/eyes-smile.png',
      soft: 'assets/novel/main/larissa/eyes-soft.png',
      upset: 'assets/novel/main/larissa/eyes-upset.png',
      wow: 'assets/novel/main/larissa/eyes-wow.png',
      blink: 'assets/novel/main/larissa/eyes-grin.png'

    },
    mouth: {
      grin: 'assets/novel/main/larissa/mouth-grin00.png',
      serious0: 'assets/novel/main/larissa/mouth-serious00.png',
      serious1: 'assets/novel/main/larissa/mouth-serious01.png',
      smile0: 'assets/novel/main/larissa/mouth-smile00.png',
      smile1: 'assets/novel/main/larissa/mouth-smile01.png',
      soft0: 'assets/novel/main/larissa/mouth-soft00.png',
      soft1: 'assets/novel/main/larissa/mouth-soft01.png',
      upset0: 'assets/novel/main/larissa/mouth-upset00.png',
      upset1: 'assets/novel/main/larissa/mouth-upset01.png',
      wow: 'assets/novel/main/larissa/mouth-wow01.png',

      // Talking frames (the smile variant)
      talking1: 'assets/novel/main/larissa/mouth-smile00.png',
      talking2: 'assets/novel/main/larissa/mouth-smile01.png'
    }
  },
  danny: {
    base: 'assets/novel/main/danny/danny.png',
    eyes: {
      annoy: 'assets/novel/main/danny/eyes-annoy.png',
      concern: 'assets/novel/main/danny/eyes-concern.png',
      cry: 'assets/novel/main/danny/eyes-cry.png',
      grin: 'assets/novel/main/danny/eyes-grin.png',
      smile: 'assets/novel/main/danny/eyes-smile.png',
      wow: 'assets/novel/main/danny/eyes-wow.png',
      blink: 'assets/novel/main/danny/eyes-grin.png'

    },
    mouth: {
      annoy0: 'assets/novel/main/danny/mouth-annoy00.png',
      annoy1: 'assets/novel/main/danny/mouth-annoy01.png',
      concern0: 'assets/novel/main/danny/mouth-concern00.png',
      concern1: 'assets/novel/main/danny/mouth-concern01.png',
      cry0: 'assets/novel/main/danny/mouth-cry00.png',
      grin: 'assets/novel/main/danny/mouth-grin00.png',
      neutral0: 'assets/novel/main/danny/mouth-neutral00.png',
      neutral1: 'assets/novel/main/danny/mouth-neutral01.png',
      smile0: 'assets/novel/main/danny/mouth-smile00.png',
      smile1: 'assets/novel/main/danny/mouth-smile01.png',
      smile2: 'assets/novel/main/danny/mouth-cry01.png',
      wow: 'assets/novel/main/danny/mouth-wow01.png',

      // Talking frames (the neutral variant)
      talking1: 'assets/novel/main/danny/mouth-smile00.png',
      talking2: 'assets/novel/main/danny/mouth-neutral01.png'
    }
  }
};

