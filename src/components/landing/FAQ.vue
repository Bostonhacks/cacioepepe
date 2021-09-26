<template>
  <div v-scrollanimation>
    <Person2 class="person mb-n16" />
    <div class="crd-shadow">
      <div class="crd">
        <div class="title font-weight-bold text-h4">FAQ</div>
        <div class="content">
          <div v-for="question in questions" :key="question.q">
            <div class="text-h5">{{ question.q }}</div>
            <p class="text-left">{{ question.a }}</p>
          </div>
          <!-- <div>Questions to be added soon</div>
                        <div>Example Question 1</div>
                        <div>Example Question 2</div>
                        <div> Example Question 3</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Person2 from "@/components/landing/Person2.vue";

export default {
  components: {
    Person2
  },
  data() {
    return {
      questions: [
        {
          q: "What is BostonHacks?",
          a:
            "BostonHacks is a 36-hour event where students from different backgrounds gather together to use technology to create cool projects. Come to BostonHacks to expand your knowledge and skills, make new friends, win prizes and network with recruiters from our corporate sponsors! "
        },
        {
          q: "When and where is BostonHacks?",
          a:
            "BostonHacks is a virtual 36-hour hackathon on November 13-14th, 2021. "
        },
        {
          q: "Who can attend?",
          a:
            "All students including undergraduate, graduate and high school students with any background, all across the world are welcome! "
        },
        {
          q: "Do I need experience?",
          a:
            "No experience is necessary. We will have plenty of mentors and resources available, along with several workshops targeted for beginners. Come learn and experience your first hackathon at BostonHacks! "
        },
        {
          q: "Does it cost anything?",
          a:
            "BostonHacks is 100% free. You don’t have to spend a dime! Unfortunately, we won’t be providing any travel reimbursements this year. "
        },
        {
          q: "Can we form teams?",
          a:
            "Of course you can! We encourage people to work in teams of up to 4 people. You may opt-in to team formation through our Slack Channel which will match you with an ideal team. You can work alone, but it won’t be the same. "
        },
        {
          q: "Are there any rules?",
          a:
            "We want to ensure a positive experience for all participants. We encourage you to read the Code of Conduct."
        }
      ]
    };
  }
};
</script>

<style scoped>
.crd {
  color: #f7f7f7;
  position: relative;
  padding: 10px 20px;
  top: -8px;
  left: -5px;
  background: linear-gradient(
    128.47deg,
    #ffa767 7.86%,
    rgba(255, 217, 116, 0.13) 79.44%
  );
  border-radius: 11px;
}

.crd-shadow {
  border-radius: 11px;
  background: #ec602d;
}

.title {
  text-align: right;
  margin-right: 8%;
  margin-top: 5%;
}

.content {
  text-align: center;
  font-weight: 600;
  margin-top: 5%;
}

.person {
  z-index: 1;
  position: relative;
  max-width: 50vw;
  margin-left: 1%;
}

.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 1s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>
