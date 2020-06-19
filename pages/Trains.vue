<template>
  <div>
    <h1 class="title">trains</h1>
    <h3>train confirmation numbers: KAFC30 and OVO4Z4</h3>
    <h3 class="subtitle subtitle-underline">journey to heide park</h3>
    <h5>
      Berlin hbf -> Hannover Hbf -> Wolterdingen(Han)
    </h5>
    <ul>
      <li>
        <strong>6:35</strong>: ICE 644 / ICE 654 departs from Platform 4 (D - G)
        of Berlin hbf
      </li>
      <li>
        <strong>8:28</strong>: ICE 644 / 654 arrives at Hannover Hbf, where we
        will catch our connecting train
      </li>
      <li><i>23min layover</i></li>
      <li>
        <strong>8:51</strong>: erx83712 / erx RB38 departs from Platform 2 of
        Hannover hbf
      </li>
      <li>
        <strong>10:09</strong>: erx83712 / erx RB38 arrives at Wolterdingen(Han)
      </li>
      <li>
        <i>walk from Wolterdingen(Han) to Heide Park (approx. 20min walk)</i>
      </li>
      <li><strong>11:00</strong>: enter Heide Park</li>
    </ul>

    <h3 class="subtitle subtitle-underline">journey back to berlin</h3>
    <h5>
      Wolterdingen(Han) -> Hannover Hbf -> Berlin hbf
    </h5>
    <ul>
      <li><strong>19:00</strong>: Heide Park closes</li>
      <li>
        <i>walk from Heide Park to Wolterdingen(Han) (approx. 20min walk)</i>
      </li>
      <li>
        <strong>19:49</strong>: erx83733 / erx RB38 departs Wolterdingen(Han)
      </li>
      <li>
        <strong>21:08</strong>: erx83733 / erx RB38 arrives at Hannover hbf,
        where we will catch our connecting train
      </li>
      <li>
        <i>23min layover</i>
      </li>
      <li>
        <strong>21:31</strong>: ICE 645 / ICE 655 departs from Platform 9 of
        Hannover hbf
      </li>
      <li>
        <strong>23:06</strong>: ICE 645 / ICE 655 arrives at Berlin hbf. This
        train also stops at Spandau and Gesundbrunnen
      </li>
    </ul>
    <h3 class="subtitle subtitle-underline">train reservation info</h3>
    <h5>seat reservations for ICE train to Hannover:</h5>
    <ul>
      <li>Group Ivana: Wagon 21, seats 101, 103, 105, 106, 107, 108</li>
      <li>Group Merle: Wagon 31, seats 91 - 93, 101, 103, 105, 107</li>
    </ul>
    <h5>seat reservations for ICE train to Berlin:</h5>
    <ul>
      <li>Group Ivana: Wagon 21, seats 101, 103, 105, 106, 107, 108</li>
      <li>Group Merle: Wagon 31, seats 91, 101, 103, 105, 106, 107, 108</li>
    </ul>
    <p>
      <strong
        >We will all board the ICE trains together. If the train is full, we
        will split into two groups and sit in our assigned seats. Else we will
        all sit together.</strong
      >
    </p>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
li {
  margin: 10px 0;
}

.subtitle-underline {
  border-bottom: 1px solid black;
}
</style>
