<?php

/**
 * Plugin Name: Snyder Blocks
 * Description: Camp Snyder Custom Components
 * Version: 0.0.2
 * Author: Eric Damtoft
 *
 * @package snyder-blocks
 */

function snyder_card_register_block() {
  wp_register_script(
    "snyder-card-editor",
    plugins_url("card-editor.build.js", __FILE__),
    array("wp-blocks", "wp-element", "wp-editor")
  );

  wp_register_script(
    "snyder-card-container-editor",
    plugins_url("card-container-editor.build.js", __FILE__),
    array("wp-blocks", "wp-element", "wp-editor")
  );

  wp_register_style(
    "snyder-card-style",
    plugins_url("card.css", __FILE__),
    array()
  );

  register_block_type("snyder-blocks/card", array(
    "editor_script" => "snyder-card-editor",
    "style" => "snyder-card-style",
    "editor_style" => "snyder-card-style"
  ));

  register_block_type("snyder-blocks/card-container", array(
    "editor_script" => "snyder-card-container-editor",
    "style" => "snyder-card-style",
    "editor_style" => "snyder-card-style"
  ));
}

function snyder_container_register_block() {
  wp_register_script(
    "snyder-container-editor",
    plugins_url("container-editor.build.js", __FILE__),
    array("wp-blocks", "wp-element", "wp-editor")
  );

  wp_register_style(
    "snyder-container-style",
    plugins_url("container.css", __FILE__),
    array()
  );

  register_block_type("snyder-blocks/container", array(
    "editor_script" => "snyder-container-editor",
    "editor_style" => "snyder-container-style"
  ));
}

add_action("init", "snyder_card_register_block");
add_action("init", "snyder_container_register_block");
