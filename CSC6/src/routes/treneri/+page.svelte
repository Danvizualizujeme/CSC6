<script>
  const trainers = [
    {
      name: "Test Trainer",
      role: "Test",
      img: "",
      bio: "Test",
      tags: [],
      links: []
    }
  ];
</script>

<div>
  {#each trainers as t}
    <div>{t.name}</div>
  {/each}
</div>
