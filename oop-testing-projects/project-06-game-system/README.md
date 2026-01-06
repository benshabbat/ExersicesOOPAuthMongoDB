# Project 06 - RPG Game System 🎮

## 🎯 Project Goal

Build a complete RPG (Role-Playing Game) character system with combat mechanics, inventory management, quests, skill trees, and party management. This advanced project teaches complex game logic, state management, and object interactions.

## 📖 Project Description

Create an RPG game system where players can create characters, engage in turn-based combat, manage inventories, complete quests, level up with skill trees, and form parties with comprehensive testing.

## 🎭 User Stories

As a player, I want to:
- ✅ Create custom characters with different classes
- ✅ Engage in turn-based combat
- ✅ Collect and equip items
- ✅ Level up and gain experience
- ✅ Learn and use skills/abilities
- ✅ Form parties with multiple characters
- ✅ Accept and complete quests
- ✅ Track game statistics

## 📋 Requirements

### Character Class

**Properties:**
- `name` - Character name
- `class` - Character class (Warrior, Mage, Rogue, Cleric)
- `level` - Current level (starts at 1)
- `experience` - Current XP
- `#maxHealth` (private) - Maximum health points
- `#currentHealth` (private) - Current health points
- `#mana` (private) - Mana/magic points
- `#baseStats` (private) - Base attributes (strength, intelligence, dexterity, vitality)
- `#inventory` (private) - Character's items
- `#equippedItems` (private) - Currently equipped items
- `#skills` (private) - Learned skills
- `#statusEffects` (private) - Active buffs/debuffs

**Methods:**
- `constructor(name, characterClass)`
- `getStats()` - Get calculated stats (base + equipment bonuses)
- `takeDamage(amount)` - Reduce health
- `heal(amount)` - Restore health
- `useMana(amount)` - Consume mana
- `restoreMana(amount)` - Restore mana
- `isAlive()` - Check if health > 0
- `gainExperience(amount)` - Add XP and level up if needed
- `levelUp()` - Increase level and stats
- `addItem(item)` - Add item to inventory
- `removeItem(itemId)` - Remove item from inventory
- `equipItem(itemId)` - Equip item from inventory
- `unequipItem(slot)` - Unequip item to inventory
- `learnSkill(skill)` - Learn new skill
- `useSkill(skillName, target)` - Use skill on target
- `addStatusEffect(effect)` - Apply status effect
- `updateStatusEffects()` - Process status effects (duration, damage over time)
- `rest()` - Full health and mana restore

### Item Class

**Properties:**
- `id` - Unique item identifier
- `name` - Item name
- `type` - 'weapon', 'armor', 'consumable', 'quest'
- `rarity` - 'common', 'uncommon', 'rare', 'epic', 'legendary'
- `value` - Gold value
- `stats` - Stat bonuses (if equipment)
- `slot` - Equipment slot (if equipment)
- `effect` - Effect function (if consumable)
- `stackable` - Can stack in inventory
- `quantity` - Current stack size

**Methods:**
- `constructor(id, name, type, rarity, value, options)`
- `use(character)` - Use item (consumable or equip)
- `getDescription()` - Get item description
- `canStackWith(otherItem)` - Check if items can stack

### Skill Class

**Properties:**
- `name` - Skill name
- `description` - Skill description
- `manaCost` - Mana required to use
- `cooldown` - Turns until can use again
- `#currentCooldown` (private) - Current cooldown timer
- `targetType` - 'self', 'ally', 'enemy', 'all_enemies', 'all_allies'
- `effect` - Skill effect function

**Methods:**
- `constructor(name, description, manaCost, cooldown, targetType, effect)`
- `canUse(character)` - Check if character can use skill
- `use(caster, target)` - Execute skill effect
- `reduceCooldown()` - Decrease cooldown counter
- `resetCooldown()` - Set to full cooldown

### Combat Class

**Properties:**
- `#party` (private) - Player's party
- `#enemies` (private) - Enemy characters
- `#turnOrder` (private) - Initiative order
- `#currentTurn` (private) - Current turn index
- `#combatLog` (private) - Battle log
- `isActive` - Combat active status

**Methods:**
- `constructor(party, enemies)`
- `start()` - Initialize combat
- `calculateTurnOrder()` - Determine initiative order
- `executeAction(character, action, target)` - Perform combat action
- `nextTurn()` - Advance to next turn
- `checkVictory()` - Check if combat ended
- `getWinner()` - Get winning side
- `getCombatLog()` - Get battle log
- `flee()` - Attempt to escape

### Quest Class

**Properties:**
- `id` - Quest identifier
- `title` - Quest title
- `description` - Quest description
- `objectives` - Array of objectives
- `rewards` - Reward items/XP/gold
- `status` - 'available', 'active', 'completed', 'failed'
- `#progress` (private) - Objective progress

**Methods:**
- `constructor(id, title, description, objectives, rewards)`
- `accept()` - Start quest
- `updateProgress(objectiveId, amount)` - Update objective
- `checkCompletion()` - Check if all objectives met
- `complete()` - Mark as complete and give rewards
- `fail()` - Mark as failed
- `getProgress()` - Get current progress

### Party Class

**Properties:**
- `name` - Party name
- `#members` (private) - Party members
- `#gold` (private) - Shared gold
- `#activeQuests` (private) - Active quests
- `#completedQuests` (private) - Completed quests

**Methods:**
- `constructor(name)`
- `addMember(character)` - Add character to party
- `removeMember(characterName)` - Remove character
- `getMembers()` - Get all members
- `getAliveMembers()` - Get living members
- `addGold(amount)` - Add gold
- `spendGold(amount)` - Spend gold
- `acceptQuest(quest)` - Start quest
- `completeQuest(questId)` - Complete quest
- `distributeExperience(amount)` - Give XP to all alive members
- `rest()` - Rest all members
- `getTotalLevel()` - Sum of all member levels

## 🧪 Testing Requirements

Write comprehensive tests for:
- ✅ Character creation and stats
- ✅ Damage and healing mechanics
- ✅ Level up system
- ✅ Inventory management
- ✅ Equipment system with stat bonuses
- ✅ Skill learning and usage
- ✅ Combat turn order and actions
- ✅ Status effects (buffs, debuffs, DoT)
- ✅ Quest progression and completion
- ✅ Party management
- ✅ Gold management
- ✅ Edge cases (death, empty inventory, cooldowns)

## 🎯 Hints

<details>
<summary>💡 Hint 1: Character Stats System</summary>

```javascript
class Character {
  #maxHealth;
  #currentHealth;
  #mana;
  #baseStats;
  #inventory = [];
  #equippedItems = {};

  constructor(name, characterClass) {
    this.name = name;
    this.class = characterClass;
    this.level = 1;
    this.experience = 0;
    
    // Set base stats based on class
    this.#setInitialStats(characterClass);
    this.#currentHealth = this.#maxHealth;
  }

  #setInitialStats(characterClass) {
    const classStats = {
      Warrior: { strength: 15, intelligence: 5, dexterity: 10, vitality: 15 },
      Mage: { strength: 5, intelligence: 15, dexterity: 8, vitality: 8 },
      Rogue: { strength: 8, intelligence: 8, dexterity: 15, vitality: 10 },
      Cleric: { strength: 10, intelligence: 12, dexterity: 8, vitality: 12 }
    };

    this.#baseStats = classStats[characterClass] || classStats.Warrior;
    this.#maxHealth = this.#baseStats.vitality * 10;
    this.#mana = this.#baseStats.intelligence * 5;
  }

  getStats() {
    // Calculate total stats (base + equipment bonuses)
    const totalStats = { ...this.#baseStats };
    
    for (const item of Object.values(this.#equippedItems)) {
      if (item.stats) {
        for (const [stat, bonus] of Object.entries(item.stats)) {
          totalStats[stat] = (totalStats[stat] || 0) + bonus;
        }
      }
    }

    return {
      ...totalStats,
      health: this.#currentHealth,
      maxHealth: this.#maxHealth,
      mana: this.#mana,
      attack: Math.floor(totalStats.strength * 1.5),
      defense: Math.floor(totalStats.vitality * 0.5),
      critChance: Math.floor(totalStats.dexterity * 0.3)
    };
  }
}
```

Key concepts:
- Class-specific base stats
- Equipment bonuses add to stats
- Derived stats (attack, defense) calculated from base
</details>

<details>
<summary>💡 Hint 2: Combat Damage and Healing</summary>

```javascript
takeDamage(amount, canDodge = true) {
  if (!this.isAlive()) {
    throw new Error('Character is already dead');
  }

  // Check for dodge (based on dexterity)
  if (canDodge) {
    const stats = this.getStats();
    const dodgeChance = Math.min(stats.dexterity * 0.5, 50); // Max 50%
    if (Math.random() * 100 < dodgeChance) {
      return { damage: 0, dodged: true };
    }
  }

  // Apply defense reduction
  const stats = this.getStats();
  const actualDamage = Math.max(1, amount - stats.defense);
  
  this.#currentHealth = Math.max(0, this.#currentHealth - actualDamage);
  
  return { damage: actualDamage, dodged: false };
}

heal(amount) {
  if (!this.isAlive()) {
    throw new Error('Cannot heal dead character');
  }

  const healAmount = Math.min(amount, this.#maxHealth - this.#currentHealth);
  this.#currentHealth += healAmount;
  
  return healAmount;
}

isAlive() {
  return this.#currentHealth > 0;
}
```

Combat mechanics:
- Dodge chance based on dexterity
- Defense reduces damage
- Healing cannot exceed max health
- Dead characters cannot be healed
</details>

<details>
<summary>💡 Hint 3: Experience and Leveling</summary>

```javascript
gainExperience(amount) {
  if (!this.isAlive()) {
    return false;
  }

  this.experience += amount;
  const experienceNeeded = this.#getExperienceForNextLevel();

  if (this.experience >= experienceNeeded) {
    this.levelUp();
    return true;
  }

  return false;
}

#getExperienceForNextLevel() {
  // Formula: level * 100 + (level - 1) * 50
  return this.level * 100 + (this.level - 1) * 50;
}

levelUp() {
  this.level++;
  
  // Increase base stats
  const statGrowth = {
    Warrior: { strength: 3, vitality: 3, dexterity: 1, intelligence: 1 },
    Mage: { intelligence: 3, dexterity: 1, strength: 1, vitality: 2 },
    Rogue: { dexterity: 3, strength: 2, intelligence: 1, vitality: 2 },
    Cleric: { intelligence: 2, vitality: 2, strength: 2, dexterity: 1 }
  };

  const growth = statGrowth[this.class];
  for (const [stat, increase] of Object.entries(growth)) {
    this.#baseStats[stat] += increase;
  }

  // Update max health and mana
  this.#maxHealth = this.#baseStats.vitality * 10;
  this.#mana = this.#baseStats.intelligence * 5;
  
  // Full restore on level up
  this.#currentHealth = this.#maxHealth;
}
```

Leveling system:
- XP requirement increases with level
- Class-specific stat growth
- Full heal on level up
</details>

<details>
<summary>💡 Hint 4: Inventory and Equipment</summary>

```javascript
addItem(item) {
  if (!(item instanceof Item)) {
    throw new Error('Must be an Item instance');
  }

  // Check if stackable
  if (item.stackable) {
    const existing = this.#inventory.find(i => i.canStackWith(item));
    if (existing) {
      existing.quantity += item.quantity;
      return;
    }
  }

  this.#inventory.push(item);
}

equipItem(itemId) {
  const item = this.#inventory.find(i => i.id === itemId);
  if (!item) {
    throw new Error('Item not in inventory');
  }

  if (item.type !== 'weapon' && item.type !== 'armor') {
    throw new Error('Item is not equippable');
  }

  // Unequip current item in slot if exists
  if (this.#equippedItems[item.slot]) {
    this.unequipItem(item.slot);
  }

  // Equip new item
  this.#equippedItems[item.slot] = item;
  this.#inventory = this.#inventory.filter(i => i.id !== itemId);
}

unequipItem(slot) {
  const item = this.#equippedItems[slot];
  if (!item) {
    throw new Error('No item equipped in this slot');
  }

  delete this.#equippedItems[slot];
  this.addItem(item);
}

getInventory() {
  return [...this.#inventory];
}

getEquippedItems() {
  return { ...this.#equippedItems };
}
```

Equipment mechanics:
- Stackable items combine
- Only one item per slot
- Unequipping returns to inventory
</details>

<details>
<summary>💡 Hint 5: Skills and Abilities</summary>

```javascript
class Skill {
  #currentCooldown = 0;

  constructor(name, description, manaCost, cooldown, targetType, effect) {
    this.name = name;
    this.description = description;
    this.manaCost = manaCost;
    this.cooldown = cooldown;
    this.targetType = targetType;
    this.effect = effect;
  }

  canUse(character) {
    if (this.#currentCooldown > 0) {
      return { canUse: false, reason: `On cooldown: ${this.#currentCooldown} turns` };
    }

    const stats = character.getStats();
    if (stats.mana < this.manaCost) {
      return { canUse: false, reason: 'Not enough mana' };
    }

    if (!character.isAlive()) {
      return { canUse: false, reason: 'Character is dead' };
    }

    return { canUse: true };
  }

  use(caster, target) {
    const check = this.canUse(caster);
    if (!check.canUse) {
      throw new Error(check.reason);
    }

    // Consume mana
    caster.useMana(this.manaCost);

    // Execute effect
    const result = this.effect(caster, target);

    // Set cooldown
    this.#currentCooldown = this.cooldown;

    return result;
  }

  reduceCooldown() {
    if (this.#currentCooldown > 0) {
      this.#currentCooldown--;
    }
  }

  resetCooldown() {
    this.#currentCooldown = this.cooldown;
  }
}

// In Character class
learnSkill(skill) {
  if (!(skill instanceof Skill)) {
    throw new Error('Must be a Skill instance');
  }

  const hasSkill = this.#skills.some(s => s.name === skill.name);
  if (hasSkill) {
    throw new Error('Skill already learned');
  }

  this.#skills.push(skill);
}

useSkill(skillName, target) {
  const skill = this.#skills.find(s => s.name === skillName);
  if (!skill) {
    throw new Error('Skill not learned');
  }

  return skill.use(this, target);
}
```

Skill system:
- Mana cost
- Cooldown management
- Target type validation
- Custom effects
</details>

<details>
<summary>💡 Hint 6: Turn-Based Combat System</summary>

```javascript
class Combat {
  #party = [];
  #enemies = [];
  #turnOrder = [];
  #currentTurn = 0;
  #combatLog = [];

  constructor(party, enemies) {
    this.#party = party;
    this.#enemies = enemies;
    this.isActive = false;
  }

  start() {
    this.isActive = true;
    this.calculateTurnOrder();
    this.#log('Combat started!');
  }

  calculateTurnOrder() {
    const allCombatants = [
      ...this.#party.map(c => ({ character: c, side: 'party' })),
      ...this.#enemies.map(c => ({ character: c, side: 'enemy' }))
    ];

    // Sort by dexterity (initiative)
    this.#turnOrder = allCombatants.sort((a, b) => {
      const statsA = a.character.getStats();
      const statsB = b.character.getStats();
      return statsB.dexterity - statsA.dexterity;
    });
  }

  getCurrentTurnCharacter() {
    return this.#turnOrder[this.#currentTurn];
  }

  executeAction(action, target) {
    if (!this.isActive) {
      throw new Error('Combat is not active');
    }

    const current = this.getCurrentTurnCharacter();
    const character = current.character;

    if (!character.isAlive()) {
      this.#log(`${character.name} is dead, skipping turn`);
      this.nextTurn();
      return;
    }

    let result;
    if (action.type === 'attack') {
      result = this.#performAttack(character, target);
    } else if (action.type === 'skill') {
      result = character.useSkill(action.skillName, target);
    }

    this.#log(`${character.name} ${action.type}ed ${target.name}: ${JSON.stringify(result)}`);

    this.nextTurn();
    return result;
  }

  #performAttack(attacker, target) {
    const stats = attacker.getStats();
    const damage = stats.attack;
    
    // Check for critical hit
    const isCrit = Math.random() * 100 < stats.critChance;
    const finalDamage = isCrit ? damage * 2 : damage;

    const result = target.takeDamage(finalDamage);
    result.isCrit = isCrit;
    
    return result;
  }

  nextTurn() {
    this.#currentTurn = (this.#currentTurn + 1) % this.#turnOrder.length;

    // Check for victory
    const victoryCheck = this.checkVictory();
    if (victoryCheck) {
      this.isActive = false;
      this.#log(`${victoryCheck} wins!`);
    }
  }

  checkVictory() {
    const partyAlive = this.#party.some(c => c.isAlive());
    const enemiesAlive = this.#enemies.some(c => c.isAlive());

    if (!partyAlive) return 'Enemies';
    if (!enemiesAlive) return 'Party';
    return null;
  }

  #log(message) {
    this.#combatLog.push({ turn: this.#currentTurn, message });
  }

  getCombatLog() {
    return [...this.#combatLog];
  }
}
```

Combat features:
- Initiative based on dexterity
- Turn rotation
- Attack with crit chance
- Victory conditions
- Combat log
</details>

<details>
<summary>⚠️ Hint 7: Common Pitfalls</summary>

Watch out for:
- ❌ Not checking if character is alive before actions
- ❌ Forgetting to reduce skill cooldowns each turn
- ❌ Not validating equipment slots match
- ❌ Memory leaks from circular references
- ❌ Not capping stats at reasonable maximums
- ❌ Allowing negative health/mana
- ❌ Not handling party member death in combat
- ❌ Forgetting to distribute XP to party
- ❌ Not checking quest prerequisites
- ❌ Race conditions in turn-based combat
</details>

## 🏆 Bonus Challenges

1. **Status Effects System** ⭐⭐
   - Poison (damage over time)
   - Stun (skip turns)
   - Buffs/debuffs

2. **Crafting System** ⭐⭐⭐
   - Combine items
   - Recipe system
   - Material gathering

3. **Pet/Companion System** ⭐⭐
   - Summon creatures
   - Pet abilities
   - Pet leveling

4. **Class Specializations** ⭐⭐
   - Skill trees
   - Different builds
   - Talent points

5. **Dungeon System** ⭐⭐⭐
   - Procedural generation
   - Rooms and encounters
   - Boss fights

6. **Save/Load System** ⭐⭐
   - Serialize game state
   - Multiple save slots

7. **Permadeath Mode** ⭐
   - Hardcore difficulty
   - Character deletion on death

## ✅ Completion Checklist

- [ ] All 6 classes implemented
- [ ] Character creation working
- [ ] Combat system functional
- [ ] Damage and healing accurate
- [ ] Level up system working
- [ ] Inventory management complete
- [ ] Equipment with stat bonuses
- [ ] Skill system with cooldowns
- [ ] Quest system functional
- [ ] Party management working
- [ ] Turn order correct
- [ ] 50+ comprehensive tests
- [ ] Edge cases handled
- [ ] Status effects working

---

## 🔐 Complete Solution

<details>
<summary>🎯 Click to reveal complete solution (Try solving it yourself first!)</summary>

Due to the extensive nature of this project, I'll provide key implementations:

### character.js

```javascript
class Character {
  #maxHealth;
  #currentHealth;
  #mana;
  #baseStats;
  #inventory = [];
  #equippedItems = {};
  #skills = [];
  #statusEffects = [];

  constructor(name, characterClass) {
    if (!name) {
      throw new Error('Name is required');
    }
    if (!['Warrior', 'Mage', 'Rogue', 'Cleric'].includes(characterClass)) {
      throw new Error('Invalid character class');
    }

    this.name = name;
    this.class = characterClass;
    this.level = 1;
    this.experience = 0;
    
    this.#setInitialStats(characterClass);
    this.#currentHealth = this.#maxHealth;
  }

  #setInitialStats(characterClass) {
    const classStats = {
      Warrior: { strength: 15, intelligence: 5, dexterity: 10, vitality: 15 },
      Mage: { strength: 5, intelligence: 15, dexterity: 8, vitality: 8 },
      Rogue: { strength: 8, intelligence: 8, dexterity: 15, vitality: 10 },
      Cleric: { strength: 10, intelligence: 12, dexterity: 8, vitality: 12 }
    };

    this.#baseStats = classStats[characterClass];
    this.#maxHealth = this.#baseStats.vitality * 10;
    this.#mana = this.#baseStats.intelligence * 5;
  }

  getStats() {
    const totalStats = { ...this.#baseStats };
    
    for (const item of Object.values(this.#equippedItems)) {
      if (item.stats) {
        for (const [stat, bonus] of Object.entries(item.stats)) {
          totalStats[stat] = (totalStats[stat] || 0) + bonus;
        }
      }
    }

    return {
      ...totalStats,
      health: this.#currentHealth,
      maxHealth: this.#maxHealth,
      mana: this.#mana,
      attack: Math.floor(totalStats.strength * 1.5),
      defense: Math.floor(totalStats.vitality * 0.5),
      critChance: Math.floor(totalStats.dexterity * 0.3)
    };
  }

  takeDamage(amount, canDodge = true) {
    if (!this.isAlive()) {
      throw new Error('Character is already dead');
    }

    if (canDodge) {
      const stats = this.getStats();
      const dodgeChance = Math.min(stats.dexterity * 0.5, 50);
      if (Math.random() * 100 < dodgeChance) {
        return { damage: 0, dodged: true };
      }
    }

    const stats = this.getStats();
    const actualDamage = Math.max(1, amount - stats.defense);
    
    this.#currentHealth = Math.max(0, this.#currentHealth - actualDamage);
    
    return { damage: actualDamage, dodged: false };
  }

  heal(amount) {
    if (!this.isAlive()) {
      throw new Error('Cannot heal dead character');
    }

    const healAmount = Math.min(amount, this.#maxHealth - this.#currentHealth);
    this.#currentHealth += healAmount;
    
    return healAmount;
  }

  useMana(amount) {
    if (amount > this.#mana) {
      throw new Error('Not enough mana');
    }
    this.#mana -= amount;
  }

  restoreMana(amount) {
    this.#mana = Math.min(this.#mana + amount, this.#baseStats.intelligence * 5);
  }

  isAlive() {
    return this.#currentHealth > 0;
  }

  gainExperience(amount) {
    if (!this.isAlive()) return false;

    this.experience += amount;
    const experienceNeeded = this.level * 100 + (this.level - 1) * 50;

    if (this.experience >= experienceNeeded) {
      this.levelUp();
      return true;
    }

    return false;
  }

  levelUp() {
    this.level++;
    
    const statGrowth = {
      Warrior: { strength: 3, vitality: 3, dexterity: 1, intelligence: 1 },
      Mage: { intelligence: 3, dexterity: 1, strength: 1, vitality: 2 },
      Rogue: { dexterity: 3, strength: 2, intelligence: 1, vitality: 2 },
      Cleric: { intelligence: 2, vitality: 2, strength: 2, dexterity: 1 }
    };

    const growth = statGrowth[this.class];
    for (const [stat, increase] of Object.entries(growth)) {
      this.#baseStats[stat] += increase;
    }

    this.#maxHealth = this.#baseStats.vitality * 10;
    this.#mana = this.#baseStats.intelligence * 5;
    this.#currentHealth = this.#maxHealth;
  }

  addItem(item) {
    if (item.stackable) {
      const existing = this.#inventory.find(i => i.canStackWith(item));
      if (existing) {
        existing.quantity += item.quantity;
        return;
      }
    }
    this.#inventory.push(item);
  }

  equipItem(itemId) {
    const item = this.#inventory.find(i => i.id === itemId);
    if (!item) throw new Error('Item not in inventory');
    if (item.type !== 'weapon' && item.type !== 'armor') {
      throw new Error('Item is not equippable');
    }

    if (this.#equippedItems[item.slot]) {
      this.unequipItem(item.slot);
    }

    this.#equippedItems[item.slot] = item;
    this.#inventory = this.#inventory.filter(i => i.id !== itemId);
  }

  unequipItem(slot) {
    const item = this.#equippedItems[slot];
    if (!item) throw new Error('No item equipped in this slot');

    delete this.#equippedItems[slot];
    this.addItem(item);
  }

  learnSkill(skill) {
    const hasSkill = this.#skills.some(s => s.name === skill.name);
    if (hasSkill) throw new Error('Skill already learned');
    this.#skills.push(skill);
  }

  useSkill(skillName, target) {
    const skill = this.#skills.find(s => s.name === skillName);
    if (!skill) throw new Error('Skill not learned');
    return skill.use(this, target);
  }

  rest() {
    this.#currentHealth = this.#maxHealth;
    this.#mana = this.#baseStats.intelligence * 5;
  }

  getInventory() {
    return [...this.#inventory];
  }

  getEquippedItems() {
    return { ...this.#equippedItems };
  }
}

export default Character;
```

### Complete test suite available in solution files

</details>

---

**Next**: Build your own custom RPG project or extend this one! 🚀
