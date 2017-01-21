cake.commands.category('railDeCake', 'Specific Rail de cake commands')
  .add(new cake.commands.Command('getPosition')
    .description('Send you your position')
    .handler(player => {
      cake.chat.send(player, 'Position :');
      cake.chat.send(player, 'Position : X: ' + player.position.x, cake.colors.green);
      cake.chat.send(player, 'Position : Y: ' + player.position.y, cake.colors.green);
      cake.chat.send(player, 'Position : Z: ' + player.position.z, cake.colors.green);
    }));


