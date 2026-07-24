import { escapeHtml } from '../src/utils/DomSafety';

describe('escapeHtml', () => {
  it('escapes HTML-sensitive characters from asset metadata', () => {
    expect(escapeHtml('<img src=x onerror="alert(1)">&\'test\''))
      .toBe('&lt;img src=x onerror=&quot;alert(1)&quot;&gt;&amp;&#39;test&#39;');
  });
});
