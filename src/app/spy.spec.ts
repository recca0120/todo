class Foo {
    bar: string;

    setBar(bar): this {
        this.bar = bar;

        return this;
    }

    getBar() {
        return this.bar;
    }
}

describe('spy', () => {
    let foo: Foo;

    beforeEach(() => {
        foo = new Foo();

        expect(foo.setBar('fooBar')).toBe(foo);
        expect(foo.getBar()).toBe('fooBar');
    });

    it('spyOn setBar', () => {
        spyOn(foo, 'setBar');

        foo.setBar('buzz');

        expect(foo.getBar()).not.toBe('buzz');
        expect(foo.getBar()).toBe('fooBar');

        expect(foo.setBar).toHaveBeenCalled();
    });

});
