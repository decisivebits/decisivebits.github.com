(function() {
  var self = window.decisivebits = {
    init: function() {
      with(self) {
        insertMailLink();
        printLineNumbers();
        createBlinkingCaret();
        showLikeButton();
      }
    },

    insertMailLink: function() {
      var a = document.createElement('a');
      var m = "m_o_c_._s_t_i_b_e_v_i_s_i_c_e_d_@_t_c_a_t_n_o_c".split('_').reverse().join('');
      a.setAttribute('href', ':_o_t_l_i_a_m'.split('_').reverse().join('') + m);
      a.innerHTML = m;
      document.getElementById('mail').appendChild(a);
    },

    printLineNumbers: function() {
      var lines = 15;
      var l = '';
      for(var i = 0; i < lines; i++) {
        l += i + '<br />';
      }
      document.getElementById('lines').innerHTML = l;
    },

    createBlinkingCaret: function() {
      var caret = document.getElementById('caret');
      setInterval(function() {
        caret.style.visibility = caret.style.visibility == 'hidden' ? 'visible' : 'hidden';
      }, 500);
    },

    showLikeButton: function() {
      var iframe = document.createElement('iframe');
      with(iframe) {
        setAttribute('src', 'http://www.facebook.com/plugins/like.php?app_id=101124673317947&href=https%3A%2F%2Fwww.facebook.com%2Fpages%2FDecisiveBits%2F240623752616386&send=false&layout=button_count&width=110&show_faces=true&action=like&colorscheme=light&font&height=21');
        setAttribute('scrolling', 'no');
        setAttribute('frameborder', '0');
        setAttribute('allowTransparency', 'true');
      }
      document.getElementById('fblike').appendChild(iframe);
    }
  }

  decisivebits.init();
}());
