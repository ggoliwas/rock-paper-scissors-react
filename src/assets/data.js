import rock from "../assets/icon-rock.svg"
import paper from "../assets/icon-paper.svg"
import scissors from "../assets/icon-scissors.svg"
import lizard from "../assets/icon-lizard.svg"
import spock from "../assets/icon-spock.svg"

export const data = [
    {
        "id": 1,
        "name": "rock",
        "image": rock,
        "beats": ["scissors", "lizard"],
        "position": ["position: absolute;", "bottom: -30px;", "right: 0;"],
    },
    {
        "id": 2,
        "name": "paper",
        "image": paper,
        "beats": ["rock", "spock"],
        "position": ["position: absolute;", "top: 50px;", "right: -50px;"],
    },
    {
        "id": 3,
        "name": "scissors",
        "image": scissors,
        "beats": ["paper", "lizard"],
        "position": ["position: absolute;", "top: -50px;", "left: 100px;"],
    },
    {
        "id": 4,
        "name": "lizard",
        "image": lizard,
        "beats": ["spock", "paper"],
        "position": ["position: absolute;", "bottom: -30px;", "left: 0;"],
    },
    {
        "id": 1,
        "name": "spock",
        "image": spock,
        "beats": ["scissors", "rock"],
        "position": ["position: absolute;", "top: 50px;", "left: -60px;"],
    }
]