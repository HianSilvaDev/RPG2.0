Class Player{
  construtor(name, classe, level, xp, coins, hp, mana, streng, vitality, defense){
    this.name = name;
    this.classe = classe;
    this.level = 1;
    this.xp = 0;
    this.coins = 20;
    this.hp = hp;
    this.mana = mana;
    this.streng = streng;
    this.vitality = vitality;
    this.defense = defense;
    this.agility = aglity;
    this.intelligence = intelligence;
    this.luck = 1;
    this.main_weapon = null;
    this.secondary_weapon = null;
    this.head = null;
    this.body = null;
    this.feet = null;
    this.left_hand_ring = null;
    this.right_hand_ring = null;
    this.necklace = null;
    this.inventory = [];
    this.titles = [];
  }
  
  function wallet(coins, action){
    swith(action){
      case "add":
        this.coins += coins;
        break
      case "remove": 
        this.coins -= coins;
        break
      default:
        console.log("Error: Invalid action: " + action)
      break
    }
  }
  
  function levelUp() {
    this.level += 1;
    this.xp = 0;
    this.mana += 5;
    this.streng += 1;
    this.hp += 10;
    this.vitality += 2;
    this.defense += 2;
    this.intelligence += 1;
    this.agility += 1;
  }
}